const splitByDelimiter = (str, delimiter) => {
    return str.split(delimiter);
}

const joinWithDelimiter = (arr, joinStr) => {
    return arr.join(joinStr);
}


console.log(splitByDelimiter('One, Two, Three', ', '))
console.log(joinWithDelimiter(['Four', 'Five', 'Six'], '-*-'))

// [ 'One', 'Two', 'Three' ]
// Four-*-Five-*-Six