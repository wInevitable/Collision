"use strict";

(function(root) {
   var StarTrek = root.StarTrek = (root.StarTrek || {});

   function randomColor() {
     //generate a random hex code
     return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
   }

   var Ship = StarTrek.Ship = function(options) {
     options.radius = StarTrek.Ship.RADIUS;
     options.speed = 0;
     options.angle = 0;
     options.vel = options.vel || [0, 0];
     options.color = options.color || randomColor();

     StarTrek.MovingObject.call(this, options);
   };

   StarTrek.Utilities.inherits(Ship, StarTrek.MovingObject);

   Ship.COLOR = 'Black';
   Ship.RADIUS = 15;
   Ship.MAX_SPEED = 10;

   Ship.prototype.power = function(impulse){
    if (Math.abs(this.speed + impulse) <= Ship.MAX_SPEED) {
      this.speed += impulse;
    }
   };

   Ship.prototype.turn = function(rads) {
    this.angle += rads;
    this.angle %= 2 * Math.PI;
   };

   Ship.prototype.relocate = function() {
     this.pos = this.game.randomPosition();
     this.speed = 0;
   };

   Ship.prototype.fireBullet = function() {
     var norm = StarTrek.Utilities.norm(this.vel);

     if (norm == 0) {
       return
     }
     else {
       var relVel = StarTrek.Utilities.scale(
         StarTrek.Utilities.dir(this.vel),
         StarTrek.Bullet.SPEED
       );

       var bulletVel = [
         relVel[0] + this.vel[0], relVel[1] + this.vel[1]
       ];

       var bullet = new StarTrek.Bullet({
         pos: this.pos,
         angle: this.angle,
         vel: bulletVel,
         game: this.game,
         image: this.game.images.bullet
       });

       this.game.add(bullet);
     }
   };

})(this);