let num1 = 10
let num2 = 14
let num3 = 4

let maxNum

if (num1 >= num2 && num1 >= num3){
    maxNum = num2
} else if (num2 >= num1 && num2 >= num3) {
    maxNum = num2
} else{
    maxNum = num3
}

console.log(`Max number is: ${maxNum}`)
