if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("gecc-sw.js");
}

// Date
let today = new Date().toLocaleDateString()
localStorage.date = today;
//if today is new day -> then reset calories
document.getElementById("today").innerHTML = today;

// Get JSON from local storage with key mtdListData
var cals = parseInt(localStorage.getItem('cals'))
//var initcals = localStorage.getItem('cals')
document.getElementById("calories").innerHTML = cals;

function upCals() {
  cals += 100;
  document.getElementById("calories").innerHTML = cals;
  // Inserting listData into LocalStorage.
  localStorage.cals  = cals;
};

function downCals() {
  cals -= 100;
  document.getElementById("calories").innerHTML = cals;
  // Inserting listData into LocalStorage.
  localStorage.cals  = cals;
};

function resetCals() {
  cals = 0;
  document.getElementById("calories").innerHTML = cals;
  // Inserting listData into LocalStorage.
  localStorage.cals  = cals;
};