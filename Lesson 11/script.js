let words = [
  "apples",
  "bananas",
  "melons",
  "pears",
  "grapes",
  "oranges",
  "watermelons",
];

let length = words.map((item) => item.length);
console.log(length);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [31, 2, 10, 4, 34, 6];
let numbers2 = numbers.sort((a, b) => a - b);
console.log(numbers2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let array = numbers.reverse();
console.log(array);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let names = "Alex Martinez Andrew 2 3 Zhenia";

let names2 = names.split(" ");
for (let name of names2) {
  console.log(name);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let login = "notlogin";
console.log(login.split(""));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Array.isArray(numbers2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let user = {
  password: "123456",
  age: 20,
  login: "notlogin",
  children: ["Ivan", "Pasha", "Sergei"],
  email: "envkt@example.com",
  phone: "+123 456 789",
};

console.log(user)

let password = "secretPassword";
user.password = password
console.log(user)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
