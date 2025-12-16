const mathObj = {
    abs: function (num) { return Math.abs(num) },
    isEven: function (num) { return num % 2 === 0 },
    isOdd: function (num) { return num % 2 !== 0 },
    isStrictlyPositive: function (num) { return num > 0 },
    min: function (a, b) { return a <= b ? a : b},
    max: function (a, b) { return a >= b ? a : b},
}