// utilities/calculateContrast.ts
export const calculateContrast = (color1: string, color2: string) => {
    const luminance = (hex: string) => {
      const a = parseInt(hex.substring(1, 3), 16) / 255;
      const b = parseInt(hex.substring(3, 5), 16) / 255;
      const c = parseInt(hex.substring(5, 7), 16) / 255;
  
      const rgb = [a, b, c].map((value) => {
        if (value <= 0.03928) {
          return value / 12.92;
        } else {
          return Math.pow((value + 0.055) / 1.055, 2.4);
        }
      });
  
      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    };
  
    const lum1 = luminance(color1);
    const lum2 = luminance(color2);
  
    return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);
  };
  