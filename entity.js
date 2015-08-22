entities = [];
function Entity(type, x, y, speed){
  this.type = type;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.direction = "right";
}
Entity.prototype.move = function(direction){
  if(direction == "left") this.x-=this.speed;
  if(direction == "right") this.x+=this.speed;
  if(direction == "up") this.y-=this.speed;
  if(direction == "down") this.y+=this.speed;  
}
Entity.prototype.getX = function(){
  return this.x;
}
Entity.prototype.getY = function(){
  return this.y;
}
Entity.prototype.draw = function(direction){
  var spriteX = 2;
  var spriteY;
  if(this.type == "hero") spriteY = 0;
  else if(this.type == "barrel") spriteY = 1;
  if(direction == "left") ctx.drawImage(spriteSheet, spriteWidth*spriteX, spriteHeight*spriteY, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}