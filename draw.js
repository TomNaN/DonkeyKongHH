var spriteWidth = 40;
var spriteHeight = 40;
var spriteSheet = new Image();
spriteSheet.src = "resources/spriteSheet.png";

function drawTile(ctx, x, y) {
  ctx.drawImage(spriteSheet, spriteWidth*1, 0, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight);
  
}