let num1 = 10;
let num2 = 20;
let num3 = 15;

let maxNum = (num1 >= num2 && num1 >= num3) ? num1 : (num2 >= num1 && num2 >= num3) ? num2 : num3;

console.log(`Max number is: ${maxNum}`);
