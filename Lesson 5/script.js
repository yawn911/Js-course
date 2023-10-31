let s = 3

if(s == 1){
    console.log(s)
} else if(s == 2){
    console.log(s)
} else{
    console.log(s)
}

switch (s) {
    case 1:
        console.log("one")
        break;

    case 2:
        console.log("two")
        break;

    case 3:
        console.log("three")
        break;

    default:
        console.log("idk")
        break;
}


let num1 = 10
let num2 = 20
let string = "*"

switch (string) {
    case "+":
        console.log(`result: ${num1 + num2}`)   
        break;

    case "-":
        console.log(`result: ${num1 - num2}`)
    break;

    case "/":
        console.log(`result: ${num1 / num2}`)
    break;

    case "*":
        console.log(`result: ${num1 * num2}`)
        break;

    default:
        console.log("idk")
        break;
}


let string1 = "9"
let number = +string1

switch (number) {
    case string: // typeof
        console.log("Its a string")
    break;

    case 10:
        console.log("Its a number")
    break;

    default:
        console.log("wtf?")
        break;
}