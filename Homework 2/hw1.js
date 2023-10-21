let a = 2   
let c = 3
let e = 4
let x = 5

x += a // added a to x

let result1 = a ** e // raised to the power a^e
let result2 = c ** x // raised to the power c^x
let mainResult = result1 + result2 // summing 2 powers a^e + c^x

if (mainResult > 2000) {
    console.log("The sum of a and x is greater than 2000.") 
} else {
    console.log("The sum of a and x is not more than 2000.")
}
