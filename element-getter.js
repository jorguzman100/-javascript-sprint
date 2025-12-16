function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}

const getLastElement = function (arr) {
    return arr.length > 0 ? arr.at(-1) : undefined;
}

const getElementByIndex = (arr, index) => {
    return arr.length > 0 ? arr.at(index) : undefined;
}