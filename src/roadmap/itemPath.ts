import type { Category } from "./Category";
import type { Item } from "./Item";
import type { Roadmap } from "./Roadmap";

export function itemPath(roadmap: Roadmap, item: Item, currentCategory: Category): string | null {
  const category = roadmap.categoryOf(item);

  if (category === currentCategory) {
    return null;
  }

  return `/${category.id}#${item.id}`;
}
