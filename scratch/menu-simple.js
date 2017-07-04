var game;

game = new Phaser.Game(800, 600, Phaser.CANVAS, '1982 World Cup', { preload: preload, create: create });

function preload() {

  this.load.image('title', 'assets/sprites/DZTeam1982.png');
  this.load.audio('sound', 'assets/sounds/loulad.ogg');

}
var music
function create() {

  var sprite = this.add.image(game.world.centerX, game.world.centerY, 'title');
  sprite.anchor.setTo(0.5, 0.5);
  sprite.scale.set(3);
  sprite.smoothed = false;

  music = this.game.add.audio('sound', 1, true);

  music.play();

}
