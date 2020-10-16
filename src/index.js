import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/style.scss';

import Phaser from 'phaser';

import config from './config';

const game = new Phaser.Game(config);

console.log(game);
