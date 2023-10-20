let a = 5
let b = 3
let c = true
let d = null
let e
let f = "Hello"
let g = 50000000000000n

console.log(a) // 5
console.log(b) // 3
console.log(`Variable a is: ${a + b}`) // Variable a is: 
console.log(c) // true
console.log(d) // null
console.log(e) // undefined
console.log(f) // Hello
console.log(g) // 50000000000000n (str)

console.log(`Variable a is: ${a ** b}`) // Variable a is: 125

console.log(`Variable a is: ${a + b}$`) // Variable a is: 8$

console.log(`${a > b}`) // true
console.log(`${a < b}`) // false

console.log(`${a == b}`) // false


if (true) {
  console.log('wefwef'+' sdsdfsd',`${a}`) // wefwef sdsdfsd 5
}

if (a > b) console.log(a) // 5
