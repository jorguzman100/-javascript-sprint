const getValueFromKey = (object, key) => {
    return object[key] !== undefined ? object[key] : undefined;
}

const addKeyValuePairs = (object1, object2) => {
    return {...object1, ...object2};
}

const location = {
  city: 'Tallinn',
  country: 'Estonia',
}


console.log(getValueFromKey(location, 'city'))
console.log(getValueFromKey(location, 'continent'))
console.log(addKeyValuePairs(location, { airports: ['TLL']}))
console.log(addKeyValuePairs(location, { highestElevation: 64 }))


// Tallinn
// undefined
// { city: 'Tallinn', country: 'Estonia', airports: [ 'TLL' ] }
// { city: 'Tallinn', country: 'Estonia', highestElevation: 64 }