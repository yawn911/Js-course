const { persons } = require("./script");

for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].kids.length; j++) {
    console.log(persons[i].kids[j].name);
  }
}
console.log("//////////////////////////////////////////////////////////");
for (let person of persons) {
  for (let kid of person.kids) {
    console.log(kid.name);
  }
}
