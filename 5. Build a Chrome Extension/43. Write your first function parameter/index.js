const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(user) {
    welcomeEl.textContent = `Welcome back, ${user}👋`  
}

greetUser("priyal")