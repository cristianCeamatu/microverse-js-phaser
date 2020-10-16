import Phaser from 'phaser';

import config from './config';

import TemplateScene from './scenes/TemplateScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    // const model = new Model();
    // this.globals = { model, bgMusic: null };
    this.scene.add('Template', TemplateScene);
    // this.scene.add('Title', TitleScene);
    // this.scene.add('Options', OptionsScene);
    // this.scene.add('Credits', CreditsScene);
    // this.scene.add('Game', GameScene);
    // this.scene.add('GameHard', GameHardScene);
    // this.scene.add('GameOver', GameOverScene);
    // this.scene.add('HighScores', HighScoresScene);
    this.scene.start('Template');
  }
}

const game = () => new Game();

export default game;
