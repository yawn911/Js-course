let words = ["apple", "car", "banana", "chair"];

words.splice(2, 1);
console.log(words); 

let words1 = ["apple", "car", "banana", "chair", "green", "orange"];

words1.splice(2, 3)
console.log(words1);

words1.splice(2, 3, "eheh");
console.log(words1); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let strings = ["apple", "car", "banana", "chair"];

let newStrings = strings.slice(1, 3);

console.log(newStrings);

let newStrings2 = strings.slice(-2)
console.log(newStrings2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers1 = [1, 2, 3, 4, 5,[100]]
let numbers2 = [6, 7, 8, 9, 10]

let newNumbers = numbers1.concat(numbers2)
console.log(newNumbers);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let randomStrings = ["apple", "car", "banana", "chair", "green", "orange"];

let newStrings = randomStrings.filter(item => item.length > 5);
console.log(newStrings);

let randomNumbers = [ 1, 2, 3, 8, 4, 5, 6, 7]

let newNumbers = randomNumbers.filter(item => item % 2)
console.log(newNumbers)

let newNumbers2 = randomNumbers.filter(item => item > 5)
console.log(newNumbers)

let newStrings = randomStrings.filter(item => item.length % 2 == 0)
console.log(newStrings)
