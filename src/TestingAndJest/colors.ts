type Red = number;
type Green = number;
type Blue = number;

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export class ColorError extends Error {
  constructor(color: string) {
    super(`invalid hex color: ${color}`);
  }
}

export const checkColor = (color: string): never | void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) {
    throw new ColorError(color)
  }
};

export const hex2rgb = (color: string): [Red, Green, Blue] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const redSymbol = color.substring(1, 2);
    const greenSymbol = color.substring(2, 3)
    const blueSymbol = color.substring(3, 4)

    const red = parseInt(redSymbol + redSymbol, 16);
    const green = parseInt(greenSymbol + greenSymbol, 16);
    const blue = parseInt(blueSymbol + blueSymbol, 16);
    return [red, green, blue];
  }

  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

const toHexValue = (color: number): string => {
  const hex = color.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const toHex = (red: number, green: number, blue: number) => {
  const redHex = toHexValue(red);
  const greenHex = toHexValue(green);
  const blueHex = toHexValue(blue);

  return `#${redHex}${greenHex}${blueHex}`;
};
