const randomNumbers = [3, 4, 5, 6, 7, 8, 9, 1];

function addFiveForNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 5;
    console.log(numbers[i]);
  }
}

module.exports = { addFiveForNumbers };
