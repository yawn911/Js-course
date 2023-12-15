const { persons } = require("./script");

for (let person of persons) {
  console.log(person.kids.sort((a, b) => a.age - b.age));
}

for(let i = 0; i < persons.length; i++){
    persons[i].kids.sort((a, b) => a.age - b.age);
    console.log(persons[i].kids);
}