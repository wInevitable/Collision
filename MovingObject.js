"use strict";

(function (root){
  var StarTrek = root.StarTrek = (root.StarTrek || {});
  
  var MovingObject = StarTrek.MovingObject = 
                                      function(pos, vel, radius, color) {
    this.posX = pos[0];
    this.posY = pos[1];
    this.velX = vel[0];
    this.velY = vel[1];
    this.radius = radius;
    this.color = color;
  };
  
  MovingObject.prototype.move = function() {
    this.posX += this.velX;
    this.posY += this.velY;
  };


  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    
    ctx.arc(
      this.posX,
      this.posY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    
    ctx.fill();
  };
  
   MovingObject.prototype.isCollidedWith = function(otherObject) {
     var diffX = Math.pow((this.posX - otherObject.posX), 2);
     var diffY = Math.pow((this.posY - otherObject.posY), 2);
     
     var distance = Math.sqrt(diffX + diffY);
     return (this.radius + otherObject.radius) > distance;  
   };
  
})(this);