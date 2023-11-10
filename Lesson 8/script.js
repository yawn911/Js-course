let numbers = [-1, -2, 3, 4, 5, 6]

let newItem = 7

numbers.push(newItem)
numbers.push("Hello")


console.log(numbers)

let numbersPop = numbers.pop()

console.log(numbersPop)

console.log(numbers)

numbers.shift()
console.log(numbers)

numbers.unshift("World")
console.log(numbers)

let numbers = [1, 2, 3, 4, 5, 6,]
let strings = ["Hello", "World",]

function addStrings(numbers){
    for (let i = 0; i < strings.length; i++) {
        console.log(strings[i])
        numbers.push(strings[i])
    }

    return numbers
}

console.log(addStrings(numbers))

let numbers = [-1, -2, 3, 4, 5, 6,]
let strings = ["World", "Hello"]

function addStrings(strings, numbers){
    for (let i = strings.length - 1; i >= 0; i--) {
        console.log(strings[i])
        numbers.unshift(strings[i])
    }
    return numbers
}

console.log(addStrings(strings, numbers))