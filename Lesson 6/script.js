function hello(){
    console.log("Hello World!")
}

hello()


let name = "Ivan"


function person(){

    var lastName = "Lala"
    console.log(name)

}


person()
console.log(lastName)


function showMessage(first, second, third){
    console.log(first + second + third)
}

showMessage("Hello ", "World", "!")


function numbers(first, second){
    return(first ** second)
    console.log("Hello")
}

let result = numbers(2, 5)

console.log(result)


function birthDate(age){

    if(age === +age){
        if(age < 18){
            console.log("Go away!")
        } else{
            console.log("Welcome!")
        }
    } else{
        console.log("Its not a number")
    }
} 

birthDate()
