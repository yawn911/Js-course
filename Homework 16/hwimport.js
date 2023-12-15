const { persons } = require("./hw");

function sortChildrenByAge() {
  let allChildren = [];

  for (const person of persons) {
    allChildren = allChildren.concat(person.kids);
  }

  allChildren.sort((a, b) => b.age - a.age);

  return allChildren;
}

const sortedChildrenDesc = sortChildrenByAge();
console.log(sortedChildrenDesc);
