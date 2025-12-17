const getTotalFromShoppingBasket = (arr) => {
    return arr.reduce( (total, obj) => total += obj.price, 0 );
}

const getAverageAge = (arr) => {
    return arr.reduce( (total, person) => total += person.age, 0) / arr.length;
}

const concatenateObjects = (arr) => {
    return arr.reduce( (acc, obj) => {
        if (!acc[obj.key]) {
            acc[obj.key] = [];
        }
        acc[obj.key].push(obj.value);
        return acc;
    }, {});
}



// const shoppingBasket = [
//   { name: "Apple", price: 2.5 },
//   { name: "Banana", price: 1.5 },
//   { name: "Orange", price: 3 },
//   { name: "Mango", price: 4 },
// ]
// console.log(getTotalFromShoppingBasket(shoppingBasket)) // 11


// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
//   { name: "David", age: 40 },
// ]
// console.log(getAverageAge(people)) // 32.5


// const objects = [
//   { key: "a", value: 1 },
//   { key: "b", value: 2 },
//   { key: "a", value: 3 },
//   { key: "c", value: 4 },
//   { key: "b", value: 5 },
// ]

// console.log(concatenateObjects(objects))
// // { a: [1, 3], b: [2, 5], c: [4] }
