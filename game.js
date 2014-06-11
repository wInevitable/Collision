"use strict";


(function(root) {
  
  var StarTrek = root.StarTrek = (root.StarTrek || {});
  
  var Game = StarTrek.Game = function(canvas) {
    this.ctx = canvas.getContext("2d");
    this.asteroids = [];
    this.ship = new StarTrek.Ship([Game.DIM_X /2, Game.DIM_Y/2], [0, 0]);
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(StarTrek.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
  };
  
  Game.NUM_ASTEROIDS = 10;
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  
  Game.prototype.draw = function() {
    var game = this;
    game.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    game.ship.draw(game.ctx);
    
    game.asteroids.forEach(function(asteroid) {
      asteroid.draw(game.ctx);
    })
  };
  
  Game.prototype.move = function(){
    var game = this;
    game.ship.move(Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid){
      asteroid.move(Game.DIM_X, Game.DIM_Y);
    });
  };
  
  Game.prototype.step = function(){
    this.move;
    this.draw;
  };
  
  Game.prototype.start = function(){
     var game = this;
    
     var interal = window.setInterval(function(){
       game.move();
       game.draw();
       //game.checkCollisions();
       game.checkAsteroids();
     }, 100);
  };
  
  Game.prototype.stop = function() {
    
  };
  
  Game.prototype.checkAsteroids = function() {
    var game = this;
    for (var i = 0; i < game.asteroids.length; i++) {
      var asteroid = game.asteroids[i];
      if (asteroid.posX > Game.DIM_X || asteroid.posX < 0 || asteroid.posY > Game.DIM_Y || asteroid.posY < 0) {
        game.asteroids[i] = StarTrek.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y);
      }
    }
  };
  
  Game.prototype.checkCollisions = function(){
    var game = this;
    game.asteroids.forEach(function(asteroid){
      if (asteroid.isCollidedWith(game.ship)) {
        alert("Game Over!");
      }
    });
  };

})(this);