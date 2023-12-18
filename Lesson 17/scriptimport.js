const { persons } = require("./script");

// function math() {
//   return Math.PI;
// }

// console.log(math());

// let number = 4.5;

// console.log(Math.floor(number)); // 4
// console.log(Math.round(number)); // 5
// console.log(Math.ceil(number)); // 5
// console.log(Math.trunc(number)); // 4
// console.log(Math.pow(number, 2)); // 20.25
// console.log(Math.sqrt(64)); // 8
// console.log(Math.abs(-64)); // 64
// console.log(Math.min(64, 3, 42, 2113, 54543, 22, -32, 212)); // -32
// console.log(Math.max(64, 3, 42, 2113, 54543, 22, -32, 212)); // 54543
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(Math.random(1, 2));

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(randomNumber(-100, 100)); // lol random number between  and  :D

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function randomMoney(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(person of persons){
    console.log(`My name is ${person.name} i have ${randomMoney(0, person.age * person.money)}$`);
}
