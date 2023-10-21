let apples = 5
let pears = 7

apples -= 2
pears -= 2

if (apples + pears >= 10){
    console.log(`Hooray, I have ${apples + pears} fruits left`)
} else{
    const fruitsNeeded = 10 - (apples + pears)
    console.log(`I need ${fruitsNeeded} more fruits to make juice`)
}

