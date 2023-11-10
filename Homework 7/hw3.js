let numbers = [-1, -2, 3, 4, 5, 6,]

let sum = (numbers) => {
    let result = 0
    for (let i = 0; i < numbers.length; i++){    
    result += numbers[i]
    console.log(result)
    }
    console.log(result)
    return result
}

sum(numbers)