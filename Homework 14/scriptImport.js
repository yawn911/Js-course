const { person } = require("./script");

const isFirstKidOlder = person.kids[0].age > person.kids[1].age;

if (isFirstKidOlder) {
  console.log(person.kids[0].name.toUpperCase());
  console.log(person.kids[1].name.toLowerCase());
} else {
  console.log(person.kids[1].name.toUpperCase());
  console.log(person.kids[0].name.toLowerCase());
}

console.log(person.kids[2].name.toLowerCase());
