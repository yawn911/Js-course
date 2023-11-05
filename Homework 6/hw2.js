function findLargerNumber(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}

let num1 = 5;
let num2 = 8;
let result = findLargerNumber(num1, num2);
console.log(`The larger number between ${num1} and ${num2} is ${result}`);
