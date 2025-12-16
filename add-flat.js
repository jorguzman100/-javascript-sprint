const sumNestedArray = (arr) => {
    let sum = 0;
    for (value of arr.flat(Infinity)) {
        sum += typeof value === 'number' ? value : 0;
    }
    return sum;
}

console.log(sumNestedArray([10, [5, "broken", 3], [[2, 4], "empty"]])) // 24