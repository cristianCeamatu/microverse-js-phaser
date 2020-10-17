import Phaser from 'phaser';

import config from './config';

import GameScene from './scenes/GameScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    // const model = new Model();
    // this.globals = { model, bgMusic: null };
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}

const game = () => new Game();

export default game;
