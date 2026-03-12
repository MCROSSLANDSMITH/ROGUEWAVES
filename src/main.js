import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1d1d1d',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

let player;
let cursors;

function preload() {
  // No assets yet - simple rectangle player
}

function create() {
  player = this.add.rectangle(400, 300, 32, 32, 0x00ff00);
  this.physics.add.existing(player);

  player.body.setCollideWorldBounds(true);

  cursors = this.input.keyboard.createCursorKeys();

  this.add.text(20, 20, 'Phaser is working!', {
    fontSize: '24px',
    color: '#ffffff'
  });
}

function update() {
  const speed = 200;

  player.body.setVelocity(0);

  if (cursors.left.isDown) {
    player.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(speed);
  }

  if (cursors.up.isDown) {
    player.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    player.body.setVelocityY(speed);
  }
}