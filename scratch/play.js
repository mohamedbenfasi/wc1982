var game;
var player;
var cursors;

game = new Phaser.Game(640, 480, Phaser.CANVAS, '1982 World Cup', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.spritesheet('player', 'assets/sprites/player-spritesheet.png', 32, 40, 2);
}

function create() {

    game.stage.backgroundColor = "#00FF00";

//Player
    player = game.add.sprite(50, 150, 'player');
    player.scale.set(2);
    player.smoothed = false;

    player.animations.add('right', [0, 1], 16, false);
    player.animations.add('up', [0, 1], 16, false);
    player.animations.add('left', [0, 1], 16, false);
    player.animations.add('down', [0, 1], 16, false);

    game.physics.enable(player);
    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    var speed = 160;

    if (cursors.right.isDown)
    {
        game.camera.x += 4;
        player.body.velocity.x = +speed;
        player.animations.play('right');
    }

    else if (cursors.up.isDown)
    {
        game.camera.y -= 4;
        player.body.velocity.y = -speed;
        player.animations.play('up');
    }

    else if (cursors.left.isDown)
    {
        game.camera.x -= 4;
        player.body.velocity.x = -speed;
        player.animations.play('left');
    }

    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
        player.body.velocity.y = +speed;
        player.animations.play('down');
    } else {

        player.animations.stop();
    }

}

function render() {

    game.debug.spriteInfo(player, 20, 32);

}
