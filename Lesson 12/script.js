let number = 6;
let number2 = 9;
let number3 = 10;

function fizzBuzz(number) {
  let result = "";

  if (number % 2 === 0 && number % 3 === 0) {
    result = "fizz buzz";
  } else if (number % 2 === 0) {
    result = "fizz";
  } else if (number % 3 === 0) {
    result = "buzz";
  }
  return result;
}

console.log(fizzBuzz(number));
console.log(fizzBuzz(number2));
console.log(fizzBuzz(number3));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const isDiv = (num) => {
  let resylt = "";
  if (num % 2 === 0) resylt += "fizz";
  if (num % 3 === 0) resylt += "buzz";
  return resylt;
};

console.log(isDiv(6), isDiv(0), isDiv(9));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let string = "Zhenia";
let result = string.toUpperCase();

console.log(result);

let notTabnine = string.toLowerCase();
console.log(notTabnine);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let itLanguages = ["PYTHON", "RUST", "JS", "RUBY", "HTML", "CSS"];

function lowerCase(strings) {
  let result = []

  for(let i = 0; i < itLanguages.length; i++){
    result.push(itLanguages[i].toLowerCase())
  }
  return result
}

console.log(lowerCase(itLanguages))