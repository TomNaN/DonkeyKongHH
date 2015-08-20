var spriteWidth = 40;
var spriteHeight = 40;
var spriteSheet = new Image();
spriteSheet.src = "resources/spriteSheet.png";

function drawTile(x, y) {
  ctx.drawImage(spriteSheet, spriteWidth*1, 0, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight);
}
function drawEmpty(x, y) {
  ctx.drawImage(spriteSheet, 0, 0, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight);
}