import Phaser from 'phaser';
import io from 'socket.io-client';

import player1 from '../assets/player1.png';

export default class TemplateScene extends Phaser.Scene {
  constructor() {
    super('Template');
  }

  preload() {
    console.log('preload');
    this.load.image('ship', player1);
  }

  create() {
    const self = this;
    this.socket = io();
    this.socket.on('currentPlayers', (players) => {
      console.log(players);
      Object.keys(players).forEach((id) => {
        if (players[id].playerId === self.socket.id) {
          // addPlayer(self, players[id]);
        }
      });
    });
  }

  update() {
    // console.log('updating');
  }
}
