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

  static checkerboard(size: number, cellSize: number, first: readonly number[], second: readonly number[]): Texture {
    const texture = Texture.blank(size, size);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const color = (Math.floor(x / cellSize) + Math.floor(y / cellSize)) % 2 === 0 ? first : second;
        texture.png.data.set(color, (y * size + x) * channels);
      }
    }

    return texture;
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

  pixel(x: number, y: number): number[] {
    const offset = (y * this.width + x) * channels;

    return [...this.png.data.subarray(offset, offset + channels)];
  }

  blend(x: number, y: number, color: readonly number[]) {
    const offset = (y * this.width + x) * channels;
    const alpha = color[alphaChannel]! / 255;
    const behind = this.png.data[offset + alphaChannel]! / 255;
    const combined = alpha + behind * (1 - alpha);

    for (let channel = 0; channel < alphaChannel; channel++) {
      const mixed = color[channel]! * alpha + this.png.data[offset + channel]! * behind * (1 - alpha);
      this.png.data[offset + channel] = combined === 0 ? 0 : Math.round(mixed / combined);
    }

    this.png.data[offset + alphaChannel] = Math.round(combined * 255);
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

  tinted(color: readonly number[]): Texture {
    const result = Texture.blank(this.width, this.height);
    this.png.data.copy(result.png.data);

    for (let pixel = 0; pixel < this.width * this.height; pixel++) {
      for (let channel = 0; channel < alphaChannel; channel++) {
        const offset = pixel * channels + channel;
        result.png.data[offset] = Math.round((result.png.data[offset]! * color[channel]!) / 255);
      }
    }

    return result;
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
