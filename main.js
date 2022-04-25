if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// Date
let today = new Date().toLocaleDateString()
// localStorage.date = today;
localStorage.today = today;
document.getElementById("today").innerHTML = today;
// Initialize dataData
if (localStorage.today == localStorage.geccDate) {
    cals = parseInt(localStorage.getItem.geccCals)
//} else (cals == null ) {
//    localStorage.setItem('cals', 0);
} else {
    localStorage.setItem('geccCals', 0);
    localStorage.geccDate = today;
}    

// Most recent weight
var wt = localStorage.getItem('geccWeight')
//localStorage.setItem('wt',200) // For debug purposes
if (localStorage.getItem('geccWeight')) {
	var mrw = "<p>Most recent weight: <span id='wt'>" + localStorage.getItem('geccWeight') + "</span></p>"
    document.getElementById("mrw").innerHTML = mrw;
} else {
	document.getElementById("mrw").innerHTML = "<p class='hidden'></p>";
}

// Goal daily calories
var goal = parseInt(localStorage.getItem('geccGoal'))
// Set default goal and calories for initial view
if (localStorage.getItem('geccGoal') === null) {
    localStorage.setItem('geccGoal', 1500);
    document.getElementById("geccGoal").innerHTML = goal;
    localStorage.setItem('geccCals', 0);
}
document.getElementById("goal").innerHTML = goal;

// Edit daily goal calories
function editGoal() {
    let goal = prompt("Please enter your daily calorie goal:", localStorage.getItem('goal'));
    if (goal > 799) {
        localStorage.geccGoal  = goal;
        document.getElementById("goal").innerHTML = goal;
        calcRemaining();
    } else {
        alert('Goal must be above 800');
        return 0;
    }
};

// Set initial remaining calories for the day
let remaining = (localStorage.getItem('geccGoal') - localStorage.getItem('geccCals'))
document.getElementById("remaining").innerHTML = remaining;

// Use local storage for cal value
var cals = parseInt(localStorage.getItem('geccCals'))
//var initcals = localStorage.getItem('cals')
document.getElementById("calories").innerHTML = cals;

// Add 50 calories
function up50Cals() {
  cals += 50;
  document.getElementById("calories").innerHTML = cals;
  // Inserting listData into localStorage.
  localStorage.geccCals  = cals;
  calcRemaining();
};

// Add 100 calories
function upCals() {
  cals += 100;
  document.getElementById("calories").innerHTML = cals;
  // Inserting listData into localStorage.
  localStorage.geccCals  = cals;
  calcRemaining();
};

// Subtract 100 calories
function downCals() {
    if (cals > 99) {
        cals -= 100;
        document.getElementById("calories").innerHTML = cals;
        // Inserting listData into localStorage.
        localStorage.geccCals  = cals;
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
  localStorage.geccCals  = cals;
  calcRemaining();
};

// Calculate remaining calories for the day
function calcRemaining() {
  let remaining = (localStorage.getItem('geccGoal') - localStorage.getItem('geccCals'));
  document.getElementById("remaining").innerHTML = remaining;    
}

// Enter most recent weight
function addWeight() {
    let wt = prompt("Please enter your most recent weight:");
    localStorage.geccWeight  = wt;
	var mrw = "<p>Most recent weight: <span id='wt'>" + localStorage.getItem('geccWeight') + "</span></p>"
    document.getElementById("mrw").innerHTML = mrw;
};