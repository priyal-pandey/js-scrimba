let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomItem(){
    let randomNum = Math.floor(Math.random()*3)
    return hands[randomNum]
}

console.log(randomItem())
