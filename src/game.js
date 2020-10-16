import Phaser from 'phaser';

import config from './config';

import TemplateScene from './scenes/TemplateScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    // const model = new Model();
    // this.globals = { model, bgMusic: null };
    this.scene.add('Template', TemplateScene);
    this.scene.start('Template');
  }
}

const game = () => new Game();

export default game;
