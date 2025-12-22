import { Rectangle } from "./rectangle.js";

export class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}

export const rectangle2 = new Rectangle(5, 3);
export const square = new Square(4);

// Logs should be out of the module, because when imported, it will execute any logic
// Ideally, modules should export things only, not execute logic

// console.log(rectangle2);
// console.log(rectangle2.area());
// console.log(rectangle2.perimeter());

// console.log(square);
// console.log(square.area());
// console.log(square.perimeter());