const filterOutOddNumbers = (arr) => {
    return arr.filter( value => value % 2 !== 0 );
}

const filterObjectsByNameLength = (arr, maxLength) => {
    return arr.filter( obj => obj.name.length <= maxLength );
}


const compoundFilter = (arr) => {
    return arr.filter( product => 
        product.code.length > 5 &&
        product.category.includes('special') === false &&
        product.price > 50 &&
        product.location !== 'Underground'
    );
}


const objects = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
]

console.log(filterObjectsByNameLength(objects, 5));
// [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]


const products = [
  {
    code: "ABC123",
    category: "electronics",
    price: 75,
    location: "Store",
  },
  {
    code: "XYZ456",
    category: "clothing",
    price: 30,
    location: "Mall",
  },
  {
    code: "PQR789",
    category: "special items",
    price: 60,
    location: "Underground",
  },
  {
    code: "LMN012",
    category: "accessories",
    price: 90,
    location: "Street",
  },
]

console.log(compoundFilter(products))
// [{ code: "ABC123", category: "electronics", price: 75, location: "Store" }, { code: "LMN012", category: "accessories", price: 90, location: "Street" }]
