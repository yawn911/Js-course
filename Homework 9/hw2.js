let randomNumbers = [4, 10, 14, 96, 128, 3];
let randomNumbers2 = [5, 13, 67, 84, 200];

function getHighestNumber(array) {
  let highestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
    }
  }
  return highestNumber;
}

console.log(getHighestNumber(randomNumbers));
console.log(getHighestNumber(randomNumbers2));
