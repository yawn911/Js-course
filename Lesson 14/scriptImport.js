const { person } = require("./script");

// for(let i = 0; i < person.kids.length; i++){
//     console.log(`${person.kids[i].name} loves ${person.kids[i].favoriteToys}`);
// }

// console.log(person.kids);

if (person.kids[0].age > person.kids[1].age) {
  console.log(person.kids[0].name.toUpperCase());
  console.log(person.kids[1].name.toLowerCase());
} else {
  console.log(person.kids[1].name.toUpperCase());
  console.log(person.kids[0].name.toLowerCase());
}
