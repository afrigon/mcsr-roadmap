import { IconReference } from "../../roadmap/IconReference";
import { IconSource } from "../../roadmap/IconSource";
import { ClientJar } from "../../textures/ClientJar";
import { ItemStack } from "../ItemStack";
import type { CraftingGrid } from "./CraftingGrid";
import type { CraftingRecipe } from "./CraftingRecipe";
import { Ingredient } from "./Ingredient";
import { ShapedRecipe } from "./ShapedRecipe";
import { ShapelessRecipe } from "./ShapelessRecipe";

type IngredientJson = { item: string } | { tag: string } | readonly ({ item: string } | { tag: string })[];

interface RecipeJson {
  type: string;
  pattern?: string[];
  key?: Record<string, IngredientJson>;
  ingredients?: IngredientJson[];
  result?: { item: string; count?: number };
}

interface TagJson {
  values: string[];
}

const namespacePrefix = "minecraft:";
const tagPrefix = "#";
const shapedType = "minecraft:crafting_shaped";
const shapelessType = "minecraft:crafting_shapeless";
const emptyKey = " ";

export class RecipeLibrary {
  private static shared: RecipeLibrary | null = null;

  private readonly tags = new Map<string, ReadonlySet<string>>();
  private readonly recipes: CraftingRecipe[];

  private constructor(private readonly jar: ClientJar) {
    this.recipes = jar.listData("recipes", ".json").flatMap((id) => {
      const recipe = this.parse(id, this.json<RecipeJson>(`recipes/${id}.json`));

      return recipe === null ? [] : [recipe];
    });
  }

  static fromEnvironment(): RecipeLibrary {
    const jar = ClientJar.fromEnvironment();

    if (RecipeLibrary.shared?.jar !== jar) {
      RecipeLibrary.shared = new RecipeLibrary(jar);
    }

    return RecipeLibrary.shared;
  }

  find(grid: CraftingGrid): CraftingRecipe | null {
    const matching = this.recipes.filter((recipe) => recipe.matches(grid));

    if (matching.length > 1) {
      throw new Error(`The crafting grid matches several recipes: ${matching.map((recipe) => recipe.id).join(", ")}`);
    }

    return matching[0] ?? null;
  }

  private parse(id: string, json: RecipeJson): CraftingRecipe | null {
    if (json.type !== shapedType && json.type !== shapelessType) {
      return null;
    }

    const resultId = json.result!.item.replace(namespacePrefix, "");
    const result = ItemStack.of(new IconReference(IconSource.Item, resultId), json.result!.count ?? 1);

    if (json.type === shapelessType) {
      return new ShapelessRecipe(id, result, json.ingredients!.map((ingredient) => this.ingredient(ingredient)));
    }

    const rows = RecipeLibrary.shrink(json.pattern!);
    const width = rows[0]?.length ?? 0;
    const pattern = rows.flatMap((row) =>
      [...row].map((symbol) => (symbol === emptyKey ? Ingredient.empty : this.ingredient(json.key![symbol]!))),
    );

    return new ShapedRecipe(id, result, width, rows.length, pattern);
  }

  private static shrink(pattern: readonly string[]): string[] {
    const filled = (text: string) => text.trim() !== "";
    const firstRow = pattern.findIndex(filled);
    const lastRow = pattern.findLastIndex(filled);

    if (firstRow < 0) {
      return [];
    }

    const rows = pattern.slice(firstRow, lastRow + 1);
    const width = Math.max(...rows.map((row) => row.length));
    const columns = Array.from({ length: width }, (_, column) => rows.some((row) => (row[column] ?? emptyKey) !== emptyKey));
    const firstColumn = columns.indexOf(true);
    const lastColumn = columns.lastIndexOf(true);

    return rows.map((row) => row.padEnd(width, emptyKey).slice(firstColumn, lastColumn + 1));
  }

  private ingredient(json: IngredientJson): Ingredient {
    const choices = Array.isArray(json) ? json : [json];

    return new Ingredient(
      new Set(
        choices.flatMap((choice: { item: string } | { tag: string }) =>
          "item" in choice ? [choice.item.replace(namespacePrefix, "")] : [...this.tag(choice.tag)],
        ),
      ),
    );
  }

  private tag(name: string): ReadonlySet<string> {
    const id = name.replace(namespacePrefix, "");
    const cached = this.tags.get(id);

    if (cached !== undefined) {
      return cached;
    }

    const values = this.json<TagJson>(`tags/items/${id}.json`).values.flatMap((value) =>
      value.startsWith(tagPrefix) ? [...this.tag(value.slice(tagPrefix.length))] : [value.replace(namespacePrefix, "")],
    );
    const items = new Set(values);
    this.tags.set(id, items);

    return items;
  }

  private json<T>(path: string): T {
    const data = this.jar.readData(path);

    if (data === undefined) {
      throw new Error(`${path} is missing from the client jar's data pack`);
    }

    return JSON.parse(new TextDecoder().decode(data)) as T;
  }
}
