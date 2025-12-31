// const getElementsByTag = (tagType) => {
//     return document.querySelectorAll(tagType);
// }
const getElementsByTag = (tagType) => {
    return document.getElementsByTagName(tagType);
}
const getElementsByClassName = (className) => {
    return document.getElementsByClassName(className);
}
const getElementById = (id) => {
    const element = document.getElementById(id);
    return element ? [element] : [];
}
const getElementsByAttribute = (attribute, value) => {
    return value ? document.querySelectorAll(`[${attribute}="${value}"]`) :
    document.querySelectorAll(`[${attribute}]`) ;
}

// console.log("a: ", getElementsByTag('a'));
// console.log("item ", getElementsByClassName('item'));
// console.log("submit-button: ", getElementById('submit-button'));
// console.log("type: ", getElementsByAttribute('type'));
// console.log("returned type: ", typeof getElementsByAttribute('type'));
// console.log("data-category: ", getElementsByAttribute('data-category'));
// console.log("[data-category, a]: ", getElementsByAttribute('data-category', 'a'));