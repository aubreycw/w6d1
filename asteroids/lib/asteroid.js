(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};


var Asteroid = Asteroids.Asteroid = function (pos, game) {
    vel = Asteroids.Util.randomVec(Asteroid.LENGTH)
    options = {pos: pos, color: Asteroid.COLOR, radius: Asteroid.RADIUS, vel: vel, game: game}
    Asteroids.MovingObject.call(this, options)
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject)

  Asteroid.RADIUS = 40;
  //todo
  Asteroid.LENGTH = 5;
  Asteroid.COLOR = "#66FF66"

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship){
      otherObject.relocate();
    }
  };

})();
