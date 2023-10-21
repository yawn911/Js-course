const currentHour = 10; // Assign the current hour
const currentMinute = 56; // Assign the current minute

if (currentHour >= 12) { // Check if the current hour is greater than or equal to 12
    console.log(`${currentHour}:${currentMinute}`); // If true, display the time in 'hh:mm' format
} else {
    console.log(`${currentHour}/${currentMinute}`); // If false, display the time in 'hh/mm' format
}
