let numbersArray = [6, 5, 4, 7, 5, 8, 3, 9, 5, 1]

function removingFives(numbersArray){
    for(let i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] === 5){
            numbersArray.splice(i,1);
            i--;
        }
    }
    return numbersArray
}

let result = removingFives(numbersArray);
console.log(result)