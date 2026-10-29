import { PNG } from "pngjs";

const channels = 4;
const alphaChannel = 3;

export class Texture {
  private constructor(private readonly png: PNG) {}

  static decode(data: Uint8Array): Texture {
    const decoded = PNG.sync.read(Buffer.from(data));
    const texture = Texture.blank(decoded.width, decoded.height);
    decoded.data.copy(texture.png.data);

    return texture;
  }

  static blank(width: number, height: number): Texture {
    return new Texture(new PNG({ width, height }));
  }

  get width(): number {
    return this.png.width;
  }

  get height(): number {
    return this.png.height;
  }

  encode(): Buffer {
    return PNG.sync.write(this.png);
  }

  firstFrame(): Texture {
    if (this.height <= this.width) {
      return this;
    }

    return this.crop(0, 0, this.width, this.width);
  }

  crop(x: number, y: number, width: number, height: number): Texture {
    const result = Texture.blank(width, height);
    this.png.bitblt(result.png, x, y, width, height, 0, 0);

    return result;
  }

  rotatedCounterClockwise(): Texture {
    const result = Texture.blank(this.height, this.width);

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const source = (y * this.width + x) * channels;
        const target = ((this.width - 1 - x) * result.width + y) * channels;
        this.png.data.copy(result.png.data, target, source, source + channels);
      }
    }

    return result;
  }

  paste(texture: Texture, x: number, y: number) {
    texture.png.bitblt(this.png, 0, 0, texture.width, texture.height, x, y);
  }

  overlay(texture: Texture, x: number, y: number) {
    for (let sourceY = 0; sourceY < texture.height; sourceY++) {
      for (let sourceX = 0; sourceX < texture.width; sourceX++) {
        const source = (sourceY * texture.width + sourceX) * channels;

        if (texture.png.data[source + alphaChannel] === 0) {
          continue;
        }

        const target = ((y + sourceY) * this.width + x + sourceX) * channels;
        texture.png.data.copy(this.png.data, target, source, source + channels);
      }
    }
  }

  scaled(factor: number): Texture {
    const result = Texture.blank(this.width * factor, this.height * factor);

    for (let y = 0; y < result.height; y++) {
      for (let x = 0; x < result.width; x++) {
        const source = (Math.floor(y / factor) * this.width + Math.floor(x / factor)) * channels;
        const target = (y * result.width + x) * channels;
        this.png.data.copy(result.png.data, target, source, source + channels);
      }
    }

    return result;
  }
}
