let randomNumbers = [4, 10, 14, 96, 128, 3];

function getHighestNumber() {
  let highestNumber = randomNumbers[0];
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > highestNumber) {
      highestNumber = randomNumbers[i];
    }
  }
  return highestNumber;
}

console.log(getHighestNumber());
