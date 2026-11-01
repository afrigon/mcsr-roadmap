import { Texture } from "../Texture";
import type { TextureLibrary } from "../TextureLibrary";
import type { ItemModel } from "./ItemModel";
import type { TintColors } from "./itemTints";

type ElementsModel = Extract<ItemModel, { kind: "elements" }>;

const facingThreshold = 1e-6;
const opaque = 255;

export class ModelRasterizer {
  constructor(
    private readonly textures: TextureLibrary,
    private readonly size: number,
  ) {}

  render(model: ElementsModel, tints: TintColors): Texture {
    const result = Texture.blank(this.size, this.size);
    const depth = new Float64Array(this.size * this.size).fill(-Infinity);
    const { projection } = model;

    for (const element of model.elements) {
      for (const face of element.faces) {
        const quad = element.quad(face.direction);

        if (projection.direction(quad.normal).z <= facingThreshold) {
          continue;
        }

        const origin = projection.point(quad.origin);
        const across = projection.point(quad.origin.plus(quad.across)).minus(origin);
        const down = projection.point(quad.origin.plus(quad.down)).minus(origin);
        const determinant = across.x * down.y - across.y * down.x;

        if (Math.abs(determinant) < facingThreshold) {
          continue;
        }

        const texture = this.textures.texture(face.texture).firstFrame();
        const shading = element.shading(face);
        const tint = face.tintIndex === null ? undefined : tints[face.tintIndex];
        const color = tint === undefined ? [1, 1, 1] : tint.map((channel) => channel / 255);
        const corners = [origin, origin.plus(across), origin.plus(down), origin.plus(across).plus(down)];
        const left = Math.max(0, Math.floor(Math.min(...corners.map((corner) => corner.x))));
        const right = Math.min(this.size, Math.ceil(Math.max(...corners.map((corner) => corner.x))));
        const top = Math.max(0, Math.floor(Math.min(...corners.map((corner) => corner.y))));
        const bottom = Math.min(this.size, Math.ceil(Math.max(...corners.map((corner) => corner.y))));

        for (let y = top; y < bottom; y++) {
          for (let x = left; x < right; x++) {
            const offsetX = x + 0.5 - origin.x;
            const offsetY = y + 0.5 - origin.y;
            const s = (offsetX * down.y - offsetY * down.x) / determinant;
            const t = (across.x * offsetY - across.y * offsetX) / determinant;

            if (s < 0 || s >= 1 || t < 0 || t >= 1) {
              continue;
            }

            const z = origin.z + s * across.z + t * down.z;
            const index = y * this.size + x;

            if (z <= depth[index]!) {
              continue;
            }

            const [u, v] = face.textureFraction(s, t);
            const texel = texture.pixel(
              Math.min(Math.floor(u * texture.width), texture.width - 1),
              Math.min(Math.floor(v * texture.height), texture.height - 1),
            );

            if (texel[3] === 0) {
              continue;
            }

            result.blend(x, y, [
              texel[0]! * shading * color[0]!,
              texel[1]! * shading * color[1]!,
              texel[2]! * shading * color[2]!,
              texel[3]!,
            ]);

            if (texel[3] === opaque) {
              depth[index] = z;
            }
          }
        }
      }
    }

    return result;
  }
}
