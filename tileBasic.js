function TileBasic(x, y) {
  this.x = x;
  this.y = y;
}

TileBasic.prototype.getX = function() {
  return this.x;  
}

TileBasic.prototype.getY = function() {
  return this.y;
}