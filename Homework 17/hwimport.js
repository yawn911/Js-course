const { persons } = require("./hw");

function averageAge(person){
    let totalAge = 0;
    let numberOfPersons = person.length;

    for(let i = 0; i < numberOfPersons; i++){
        totalAge += person[i].age;
    }
    return Math.floor(totalAge / numberOfPersons);
}

console.log(averageAge(persons));

function averageAgeOfKids(person) {
  let totalAge = 0;

  for (person of persons) {
    for (let j = 0; j < person.kids.length; j++) {
      totalAge += person.kids[j].age;
    }
    return Math.floor(totalAge / person.kids.length);
  }
}
console.log(averageAgeOfKids(persons));
