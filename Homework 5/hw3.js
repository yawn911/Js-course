var y = 5;


for (var i = 1; i <= y; i++) {
    var leftNeighbor = i - 1;
    var rightNeighbor = i + 1;

    console.log("Number", i, "Immediate neighbors:", leftNeighbor, rightNeighbor);
}
