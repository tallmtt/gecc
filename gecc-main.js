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
    cals = parseInt(localStorage.getItem.cals)
//} else (cals == null ) {
//    localStorage.setItem('cals', 0);
} else {
    localStorage.setItem('cals', 0);
    localStorage.date = today;
}    

// Most recent weight
var wt = localStorage.getItem('wt')
//localStorage.setItem('wt',200) // For debug purposes
if (localStorage.getItem('wt')) {
	var mrw = "<p>Most recent weight: <span id='wt'>" + localStorage.getItem('wt') + "</span></p>"
    document.getElementById("mrw").innerHTML = mrw;
} else {
	document.getElementById("mrw").innerHTML = "<p class='hidden'></p>";
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

// Set initial remaining calories for the day
let remaining = (localStorage.getItem('goal') - localStorage.getItem('cals'))
document.getElementById("remaining").innerHTML = remaining;

// Use local storage for cal value
var cals = parseInt(localStorage.getItem('cals'))
//var initcals = localStorage.getItem('cals')
document.getElementById("calories").innerHTML = cals;

// Add 50 calories
function up50Cals() {
  cals += 50;
  document.getElementById("calories").innerHTML = cals;
  // Inserting listData into localStorage.
  localStorage.cals  = cals;
  calcRemaining();
};

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
    if (cals > 99) {
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

// Enter most recent weight
function addWeight() {
    let wt = prompt("Please enter your most recent weight:");
    localStorage.wt  = wt;
	var mrw = "<p>Most recent weight: <span id='wt'>" + localStorage.getItem('wt') + "</span></p>"
    document.getElementById("mrw").innerHTML = mrw;
};