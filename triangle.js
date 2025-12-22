export class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get semiPerimeter() {
    return this.perimeter() / 2;
  }

  area() {
    const s = this.semiPerimeter;
    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    );
  }
}

export const triangle = new Triangle(3, 4, 5);

// Logs should be out of the module, because when imported, it will execute any logic
// Ideally, modules should export things only, not execute logic

// console.log(triangle);
// console.log(triangle.perimeter());
// console.log(triangle.semiPerimeter);
// console.log(triangle.area());
