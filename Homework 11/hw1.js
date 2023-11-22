let numbers = [34, 54, 62, 100, 87, 90, 34, 33];

let numbers2 = numbers.sort((a, b) => a - b);
console.log(numbers2);

let numbers3 = numbers.reverse();
console.log(numbers3);

let numbers4 = numbers2.concat(numbers3);
console.log(numbers4);