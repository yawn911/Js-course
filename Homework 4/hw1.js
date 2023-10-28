const number = 5
let factorial = 1

if(number < 0){
    console.log("Factorial is not defined for negative numbers")
} else {
    for(let i = 1; i <= number; i++){
    factorial *= i
    }
    console.log(`The factorial of ${number} is ${factorial}`) // The factorial of 5 is 120
}

const num = -1
let fact = 1

if(num < 0){
    console.log("Factorial is not defined for negative numbers") // Factorial is not defined for negative numbers
} else {
    for(let i = 1; i <= num; i++){
    fact *= i
    }
    console.log(`The factorial of ${num} is ${fact}`) // The factorial of 5 is 120
}