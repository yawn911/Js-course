let skincare = [
  "shampoo",
  "cream",
  "toner",
  "cleanser",
  "Moisturizer",
  "Sunscreen",
  "Exfoliant",
  "Serum",
  "Eye Cream",
  "scrap",
];

let newSkincare = skincare.splice(5, 8);
console.log(newSkincare);

let newSkincare2 = skincare.slice(2, 6);
console.log(newSkincare2);

let newSkincare3 = skincare.filter((item) => item.length < 6);
console.log(newSkincare3);
