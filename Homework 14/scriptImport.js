const { person } = require("./script");

person.kids.sort((a, b) => a.age - b.age);

for (let i = 0; i < person.kids.length; i++) {
  console.log(person.kids[i].name);
}
