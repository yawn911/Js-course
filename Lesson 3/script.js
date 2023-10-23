let a = 3
let b = 2
let c = ++b
let d = -a
let e = a % b
let f = "1"
let x = +f // makes a number

b += 1

console.log(c) // 3
console.log(d) // -3
console.log(e) // 0
console.log(a + f) // 31
console.log(a - f)
console.log(x)
console.log( typeof f) // string

if ( f == 2 &&  x == 1) {
    console.log(`1`)
} 

if ( f == 2 ||  x == 1) {
    console.log(`1`)
} 

if (e != f) {
    console.log(`Number`)
}

if (f == x) {
    console.log(`Number`)
} 

if (f === x) {
    console.log(`Number`)
} 

let h = c > 1 ? "more": "les"
console.log(h)

if (c > 1) {
    h = "more"
    console.log(h) // more
} else {
    h = "les"
    console.log(h)
}

let password

if (password){
    console.log("have a password")
} else {
    console.log("no password")
}

let password1 = password ? "have a password": "no password"
console.log(password1)
