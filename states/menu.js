var game = new Phaser.Game(640, 480, Phaser.CANVAS, '1982 World Cup', null);


loadState = {
  preload: function() {

      this.load.image('title', 'assets/sprites/DZTeam1982.png');
      this.load.audio('loulad', 'assets/sounds/menu-1.ogg');

  },

  create: function() {
      this.state.start("menu")
  }
}

menuState = {
  create: function() {

      var sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'title');

      sprite.anchor.setTo(0.5, 0.5);
      sprite.alpha = 0;

      var music = game.add.audio('loulad');
      music.loop = true;
      music.play();

  }
},

game.state.add("load", loadState),
game.state.add("menu", menuState),
game.state.start("load");
