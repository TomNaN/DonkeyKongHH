//This will be the home to some of the JS magic :)
var canvas,
    ctx,
    tickrate,
    xmlhttp = new XMLHttpRequest(),
    listeners = [readFile],
    text,
    interval;

function begin() {
  listeners.forEach(e=>xmlhttp.removeEventListener("readystate",e));
  xmlhttp.addEventListener("readystate",readFile);
  xmlhttp.open("GET","resources/level.txt",false);
  xmlhttp.send();
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  canvas.width=640;
  canvas.height=480;
  interval = setInterval(game, 1000/60);  
}
function errorHandler(error){
  clearInterval(interval);
  throw error;
}
function game() {
 // text?readMap(text):errorHandler("no map initialized");
}
function readMap(text){

}
function readFile(){
  text = xmlhttp.readyState==4&&xmlhttp.status==4?xmlhttp.responseText:null;
  console.log(xmlhttp.responseText);
}