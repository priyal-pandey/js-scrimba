let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array 
    myLeads.push(inputEl.value)
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    console.log(myLeads)
})


