"use strict";

(function (root){
  var StarTrek = root.StarTrek = (root.StarTrek || {});
  
  
  var Asteroid = StarTrek.Asteroid = function(pos, vel) {
    StarTrek.MovingObject.call(this, pos, vel);
    this.radius = Asteroid.RADIUS;
  };
    
  Asteroid.inherits(StarTrek.MovingObject);
  
  Asteroid.COLOR = 'red';
  Asteroid.RADIUS = 25;
  
  Asteroid.randomAsteroid = function(dimX, dimY){
    var randomPos = [Math.random() * dimX, Math.random() * dimY];
    var randomVel = randomVec();
    return new Asteroid(randomPos, randomVel);
  };
  
  var randomVec = function(){
    return [Math.random() *  Asteroid.RADIUS, Math.random() * Asteroid.RADIUS];
  };
  
  Asteroid.prototype.draw = function(ctx){
    ctx.fillStyle = Asteroid.COLOR;
    ctx.beginPath();
    
    ctx.arc(
      this.posX,
      this.posY,
      Asteroid.RADIUS,
      0,
      2 * Math.PI,
      false
    );
    
    ctx.fill();
  };
  
  Asteroid.prototype.move = function(){  
    this.posX = this.posX + this.velX;
    this.posY = this.posY + this.velY;
  };
  
})(this);