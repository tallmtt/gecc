if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("gecc-sw.js");
}

// Date
let today = new Date().toLocaleDateString()
// localStorage.date = today;
localStorage.today = today;
document.getElementById("today").innerHTML = today;
// Initialize dataData
if (localStorage.today == localStorage.date) {
    cals = localStorage.getItem.cals
} else {
    localStorage.setItem('cals', 0);
    localStorage.date = today;
}    

// Goal daily calories
var goal = parseInt(localStorage.getItem('goal'))
// Set default goal and calories for initial view
if (localStorage.getItem('goal') === null) {
    localStorage.setItem('goal', 1500);
    document.getElementById("goal").innerHTML = goal;
    localStorage.setItem('cals', 0);
}
document.getElementById("goal").innerHTML = goal;

// Set initial remaining calories for the day
let remaining = (localStorage.getItem('goal') - localStorage.getItem('cals'))
document.getElementById("remaining").innerHTML = remaining;

// Edit daily goal calories
function editGoal() {
    let goal = prompt("Please enter your daily calorie goal:", localStorage.getItem('goal'));
    if (goal > 799) {
        localStorage.goal  = goal;
        document.getElementById("goal").innerHTML = goal;
        calcRemaining();
    } else {
        alert('Goal must be above 800');
        return 0;
    }
};

// Use local storage for cal value
var cals = parseInt(localStorage.getItem('cals'))
//var initcals = localStorage.getItem('cals')
document.getElementById("calories").innerHTML = cals;

// Add 100 calories
function upCals() {
  cals += 100;
  document.getElementById("calories").innerHTML = cals;
  // Inserting listData into localStorage.
  localStorage.cals  = cals;
  calcRemaining();
};

// Subtract 100 calories
function downCals() {
    if (cals > 0) {
        cals -= 100;
        document.getElementById("calories").innerHTML = cals;
        // Inserting listData into localStorage.
        localStorage.cals  = cals;
        calcRemaining();
    } else {
        alert('You cannot consume less than 0 calories!');
    }
};

// Reset daily calories
function resetCals() {
  cals = 0;
  document.getElementById("calories").innerHTML = cals;
  // Inserting listData into localStorage.
  localStorage.cals  = cals;
  calcRemaining();
};

// Calculate remaining calories for the day
function calcRemaining() {
  let remaining = (localStorage.getItem('goal') - localStorage.getItem('cals'));
  document.getElementById("remaining").innerHTML = remaining;    
}
