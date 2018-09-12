class Color {

  red: number | string;
  green: number | string;
  blue: number | string;
  alpha: number;

  constructor(
    r: number | string, 
    g: number | string, 
    b: number | string, 
    a: number = 1
  ) {
    this.red = typeof r === 'string' ? parseInt(r, 16) : r;
    this.green = typeof g === 'string' ? parseInt(g, 16) : g;
    this.blue = typeof b === 'string' ? parseInt(b, 16) : b;
    this.alpha = a;
  }

  get(): string {
    const { red, green, blue, alpha } = this;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
  
}

export default Color;