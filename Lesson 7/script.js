function passwordFunc(password) {
    if(password && password.length >= 4){
        console.log(password)
        return password
    } else{
        return 0
    }
} 

let result = passwordFunc("")
console.log(result)

function sum(first, second) {
    return first + second;
}

let result1 = sum(5, 8);
console.log(result1);

let result2 = (a, b) => {
    console.log("Hello World!")
    return a + b
} 
console.log(result2(1, 2));


let  result = (a, b) => a * b;
console.log(result(5, 5));


let conCat = (string1, string2) =>{
    console.log(string1 + string2)
    console.log(string2 + string1)
}

console.log(conCat("Hello ", "World "))

let array1 = [1, 2, "Hello", 4, "World", 6, 7, 8, 9]
let array2 = [1, 2, "Hello", 4, "World", 6, 7, "jdfi", 323]

function arrayFnc(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

arrayFnc(array2)
arrayFnc(array1)

