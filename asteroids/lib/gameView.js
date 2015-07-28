(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var GameView = Asteroids.GameView = function (ctx, game) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    var that = this;
    var ctx = canvasEl.getContext("2d");
    this.bindViewMethods();
    setInterval(function () {
      console.log("doing a thing")
      that.game.step();
      that.game.draw(ctx);
    }, 1000 / 60)
  };

  GameView.prototype.bindViewMethods = function (first_argument) {
    var that = this;
    key('w', function() {
      that.game.ship.power([0, -1]);
    });
    key('a', function() {
      that.game.ship.power([-1, 0]);
    });
    key('s', function() {
      that.game.ship.power([0, 1]);
    });
    key('d', function() {
      that.game.ship.power([1, 0]);
    });
    key('p', function() {
      console.log("FIRED")
      that.game.ship.fireBullet();
    });
  };
})();
