// Convert hex color to RGB
export const hexToRgb = (hex: string): [number, number, number] => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };
  
  // Calculate relative luminance
  export const luminance = (r: number, g: number, b: number): number => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };
  
  // Calculate contrast ratio
  export const contrastRatio = (hex1: string, hex2: string): number => {
    const [r1, g1, b1] = hexToRgb(hex1);
    const [r2, g2, b2] = hexToRgb(hex2);
    const lum1 = luminance(r1, g1, b1) + 0.05;
    const lum2 = luminance(r2, g2, b2) + 0.05;
    return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1;
  };
  