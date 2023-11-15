let array = [1, 2, 3, 4, 5, 6];

function printFourthElement(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 3) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(printFourthElement(array));
