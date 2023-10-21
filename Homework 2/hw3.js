let apples = 5; // Assign the initial number of apples
let pears = 7; // Assign the initial number of pears

apples -= 2; // Subtract 2 apples (Mykola ate 2 apples)
pears -= 2; // Subtract 2 pears (Mykola ate 2 pears)

if (apples + pears >= 10) { // Check if there are at least 10 fruits remaining
    console.log(`Hooray, I have ${apples + pears} fruits left`); // If true, display the number of fruits left
} else {
    const fruitsNeeded = 10 - (apples + pears); // Calculate the number of additional fruits needed to make juice
    console.log(`I need ${fruitsNeeded} more fruits to make juice`); // If false, display the number of fruits needed to make juice
}
