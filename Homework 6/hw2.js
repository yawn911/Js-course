function findSum(func, x, y) {
    return func(x, y);
}

function calculateSum(x, y) {
    return x + y;
}

let result1 = findSum(calculateSum, 5, 8);
console.log(result1);
