const createPerson = (firstName, lastName, age) => {
    return {
        firstName: firstName, 
        lastName: lastName, 
        age: age
    };
}

console.log(createPerson('Max', 'Cool', 35))
