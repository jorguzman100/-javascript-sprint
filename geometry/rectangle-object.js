// import { Rectangle } from "./rectangle.js";

export const rectObj = {
  width: 50,
  height: 30,
  area: function () { return this.width * this.height },
  perimeter() { return ( this.width + this.height ) * 2 },
};

// Logs should be out of the module, because when imported, it will execute any logic
// Ideally, modules should export things only, not execute logic

// console.log(rectObj);
// console.log(rectObj.area());
// console.log(rectObj.perimeter());

// console.log(rectObj.width = 3);
// console.log(rectObj.height = 2);
// console.log(rectObj);
// console.log(rectObj.area());
// console.log(rectObj.perimeter());