(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var Ship = Asteroids.Ship = function (pos, game) {
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.vel = [0, 0];
    this.pos = pos;
    this.game = game;
  }

  Ship.COLOR = "purple";
  Ship.RADIUS = 20;
  Ship.BULLETSPEED = 10;
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.vel = [0,0];
    this.pos = this.game.randomPos();
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var denom = Math.sqrt(Math.pow(this.vel[0],2)+ Math.pow(this.vel[1],2))
    var x = this.vel[0]*Ship.BULLETSPEED/denom;
    var y = this.vel[1]*Ship.BULLETSPEED/denom;
    var velX = [x, y];
    var pos = [];
    pos[0] = this.pos[0];
    pos[1] = this.pos[1];
    bullet = new Asteroids.Bullet(pos, velX, this.game);
    this.game.add(bullet);
  };

})();
