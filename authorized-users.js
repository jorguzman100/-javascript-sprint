const isAuthorizedUser = authUsers => user => {
    return authUsers.includes(user);
}

// const check = isAuthorizedUser([1, 2, 3])

// console.log(check(5)) // false
// console.log(check(4)) // false
// console.log(check(3)) // true
// console.log(check(2)) // true
// console.log(check(1)) // true
// console.log(isAuthorizedUser([4, 5, 6])(10)) // false
// console.log(isAuthorizedUser(['A', 'B', 'C'])('C')) // true
