const Animal = "Dinosaur";

switch (Animal) {
  case "cow":
  case "giraffe":
  case "dog":
  case "pig":
    console.log("This animal is not extinct");
    break;
  default:
    console.log("This animal is extinct");
}
