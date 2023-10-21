let temp = 15; // Assign the temperature value of 15 to the variable 'temp'

console.log(`Temperature now: ${temp}`); // Display the current temperature

if (temp < 0) {
    console.log("It's very cold outside, better stay home"); // Check if the temperature is below freezing
} else if (temp >= 0 && temp <= 20) {
    console.log("It's cold outside, put on your jacket"); // Check if the temperature is between 0 and 20 degrees Celsius
} else if (temp >= 21 && temp <= 30) {
    console.log("It’s warm outside, you can wear a T-shirt."); // Check if the temperature is between 21 and 30 degrees Celsius
} else {
    console.log("It's hot outside, don't forget to drink water"); // If none of the above conditions are met, assume it's hot outside
}
