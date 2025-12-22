export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() { return this.width * this.height };
    perimeter() { return (this.width + this.height) * 2 };
}

export const rectangle = new Rectangle(5, 3);

// Logs should be out of the module, because when imported, it will execute any logic
// Ideally, modules should export things only, not execute logic

// console.log(rectangle);
// console.log(rectangle.area());
// console.log(rectangle.perimeter());