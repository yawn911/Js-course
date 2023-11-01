var y = 5; 

if (y > 1) {
    var predecessor = y - 1;
    console.log("The neighbor to the left of", y, "is", predecessor);
} else {
    console.log("The number", y, "has no neighbor to the left.");
}

var successor = y + 1;
console.log("The neighbor to the right of", y, "is", successor);
