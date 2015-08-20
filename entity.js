function Entity(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
}

Entity.prototype.move = function(direction) {
  if(direction == "left") this.x-=this.speed;
  if(direction == "right") this.x+=this.speed;
  if(direction == "up") this.y-=this.speed;
  if(direction == "down") this.y+=this.speed;  
}
