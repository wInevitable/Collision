"use strict";

(function(root) {
   var StarTrek = root.StarTrek = (root.StarTrek || {});
   
   var Bullet = StarTrek.Bullet = function(pos, vel) {
     StarTrek.MovingObject.call(this, pos, vel);
     this.radius = Bullet.RADIUS;
   };
    
   Bullet.inherits(StarTrek.MovingObject);
  
   Bullet.COLOR = 'Black';
   Bullet.RADIUS = 1;
   
   Bullet.prototype.draw = function(ctx){
     ctx.fillStyle = Bullet.COLOR;
     ctx.beginPath();
    
     ctx.arc(
       this.posX,
       this.posY,
       Bullet.RADIUS,
       0,
       2 * Math.PI,
       false
     );
    
     ctx.fill();
   };
  
   Bullet.prototype.move = function(){  
     this.posX = this.posX + this.velX;
     this.posY = this.posY + this.velY;
   };
  
})(this);