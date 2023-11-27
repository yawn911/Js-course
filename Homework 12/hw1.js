let strings = ['apple', 'Orange', 'Banana', 'grape'];

for (let i = 0; i < strings.length; i += 2) {
  let pair1 = strings[i].toUpperCase();
  let pair2 = '';

  if (strings[i + 1] !== undefined) {
    pair2 = strings[i + 1].toLowerCase();
  }
  
  console.log(pair1, pair2);
}
