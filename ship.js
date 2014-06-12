"use strict";

(function(root)
{
   var StarTrek = root.StarTrek = (root.StarTrek || {});
   
   var Ship = StarTrek.Ship = function(pos, vel) {
     StarTrek.MovingObject.call(this, pos, vel);
     this.radius = Ship.RADIUS = 30;
   };
    
   Ship.inherits(StarTrek.MovingObject);
  
   Ship.COLOR = 'Black';
   Ship.RADIUS = 30;
  
  
   Ship.prototype.draw = function(ctx){
     ctx.fillStyle = Ship.COLOR;
     ctx.beginPath();
  
     ctx.arc(
       this.posX,
       this.posY,
       Ship.RADIUS,
       0,
       2 * Math.PI,
       false
     );
  
     ctx.fill();
   };
  
   Ship.prototype.move = function(){
     this.posX = this.posX + this.velX;
     this.posY = this.posY + this.velY;
   }
  
   Ship.prototype.power = function(impulse){
     this.velX = impulse[0];
     this.velY = impulse[1];
   }
   
   Ship.prototype.fireBullets = function(){
     var ship = this;
     if (ship.velX !== 0 || ship.velY !== 0 ){
       return new StarTrek.Bullet([ship.posX, ship.posY], [ship.velX * 10, ship.velY * 10]);
     } else {
       return false;
     }
   }
  
})(this);