function removeFourthElement(numbers){
    if(numbers.length > 4){
        numbers.splice(3,1);
    return numbers
} else {
    console.log("Array does not have enough elements")
    }
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = removeFourthElement(numbersArray);
console.log(result)