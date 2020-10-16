import Phaser from 'phaser';
import io from 'socket.io-client';

export default class TemplateScene extends Phaser.Scene {
  constructor() {
    super('Template');
  }

  preload() {
    console.log('preload');
    console.log(this);
  }

  create() {
    this.socket = io();
    console.log(this.socket);
    // console.log(this.socket);
  }

  update() {
    // console.log('updating');
  }
}
