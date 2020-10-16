import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Phaser from 'phaser';

import './assets/style.scss';

console.log('working');

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);

function preload() {}

function create() {}

function update() {}
