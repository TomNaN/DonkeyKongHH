//This will be the home to some of the JS magic :)
var canvas,
    ctx,
    tickrate,
    xmlhttp = new XMLHttpRequest(),
    listeners = [readFile],
    text,
    interval,
    map;

function begin() {
  getFile("resources/level.txt");
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = 640;
  canvas.height = 480;
  interval = setInterval(game, 1000/60);  
}
function getFile(file){
  listeners.forEach(e=>xmlhttp.removeEventListener("readystate",e));
  xmlhttp.addEventListener("readystatechange",readFile);
  xmlhttp.open("GET",file,false);
  xmlhttp.send(); 
}
function errorHandler(error){
  clearInterval(interval);
  throw error;
}
function game() {
 text?readMap(text):errorHandler("no map initialized");
}
function readMap(text){
  map = text.replace(/\r/g,"").split('\n'); // FOR SOME REASON text HAD AN ODD \r
  map.forEach(function(e,i){
    e.split('').forEach(function(e,j){
      +e?drawTile(j*spriteWidth,i*spriteHeight):drawEmpty(j*spriteWidth,i*spriteHeight);
    })
  });
}
function readFile(){
  text = xmlhttp.readyState==4?xmlhttp.responseText:null;
}