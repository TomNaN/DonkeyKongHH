//This will be the home to some of the JS magic :)
var c;
var ctx;

function startup() {
  c = document.getElementById("gameCanvas");
  ctx = c.getContext("2d");
  setInterval(game, 1000/60);  
}

function game() {
  console.log("Päivää päivää!");
}