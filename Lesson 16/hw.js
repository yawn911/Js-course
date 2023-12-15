const { persons } = require("./script");
for (let person of persons) {
  let result = ["hello", "world"];
  console.log(result.concat(person.kids));
  //   console.log(person.kids.sort((a, b) => a.age - b.age));
}
