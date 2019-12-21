import State from './state.js';
import Player from './game/player.js';
import UI from './ui.js';
import Turns from './game/turns.js';

// Manage State
const state = State();

// Manage Turns
const turns = Turns();

function init() {
  state.start();
}

init();

// Manage UI
const ui = UI();
const selectors = ui.UISelectors;

let p1;
let p2;

function beginPlay() {
  p1 = new Player('HUMAN');
  p2 = new Player('CPU');
  p1.target = p2;
  p2.target = p1;
  ui.ui_play();
  turns.beginTurn(p1);
  playEvents();
}
