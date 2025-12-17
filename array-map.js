const convert2DArrayToObjectArray = (arr) => {
    return arr.map(valueKey => Object.fromEntries([valueKey]));
    // return arr.map(valueKey => ({ [valueKey[0].toString()]: valueKey[1] }));
    // return arr.map(valueKey => { return {[valueKey[0].toString()]: valueKey[1] } });
    
}

const convertArrayOfObjectsToStrings = (objectsArr) => {
    return objectsArr.map( obj => `Name: ${obj.name}, Age: ${obj.age}, City: ${obj.city}` );
}


const concatenateStrings = (stringsArr, maxLength) => {
    return stringsArr.map( str => str.length > maxLength ? str.slice(0, maxLength) + '...' : str);
}


// const data = [
//   ["name", "Alice"],
//   ["age", 30],
//   ["city", "New York"],
// ];
// console.log(convert2DArrayToObjectArray(data))
// // [{ name: "Alice" }, { age: 30 }, { city: "New York" }]


// const objects = [
//   { name: "Alice", age: 30, city: "New York" },
//   { name: "Bob", age: 25, city: "Los Angeles" },
// ]
// console.log(convertArrayOfObjectsToStrings(objects))
// // ["Name: Alice, Age: 30, City: New York", "Name: Bob, Age: 25, City: Los Angeles"]



// const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];

// console.log(concatenateStrings(strings, 5))
// // ["apple", "banan...", "kiwi", "orang...", "pinea..."]
