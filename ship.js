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
     
   }
  
   Ship.prototype.power = function(impulse){
     
   }
  
})(this);