// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const containerEl = document.getElementById("container")
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImg(){
    let imgStr = ""
    for(let i = 0; i < imgs.length; i++){
        imgStr += `<img alt="Employee" class="team-img" src=${imgs[i]}>`
    }
    containerEl.innerHTML = imgStr
}

renderImg()

//js ftw
//es6 and beyond
//apis and async js
//server side js
