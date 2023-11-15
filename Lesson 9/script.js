let array = [1, 2, 3, 4, 5]
let array2 = []

function remove(array){
    for(let i = array.length - 1; i >= 0; i--){
        if(i !== 2){    
         array2.push(array[i])
        }
    }
    return array2
}

console.log(remove(array))

let numbersArray = [6, 5, 4, 7, 5, 8, 3, 9, 5, 1]
let numbersArray2 = []

function remove(array){
    for(let i = array.length - 1; i >= 0; i--){
    if(array[i]!== 5){
        numbersArray2.push(array[i])
} 
    }
    return numbersArray2
}


console.log(remove(numbersArray))


let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10, 11, 12]

function addElement(array1, array2){
    let result = []
    for(let i = array1.length - 1; i >= 0; i--){
        result.push(array1[i])
    }
    for(let i = 0; i < array2.length / 2; i++){
        result.push(array2[i])
    }
    return result
}

console.log(addElement(array1, array2))