let firstCard = 4
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21){
    console.log("Do you want to draw another card?")
}
else if (sum === 21){
    console.log("You've got Blackjack!")
}
else{
    console.log("Bye Bye lol")
}
