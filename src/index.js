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

export function beginPlay() {
  p1 = new Player('HUMAN');
  p2 = new Player('CPU');
  p1.target = p2;
  p2.target = p1;
  ui.ui_play();
  turns.beginTurn(p1);
}

// Event Listeners / Handlers (Is there a better spot for these?)
document.addEventListener('click', function(e) {
  switch (e.target.id) {
    case 'start-game':
      beginPlay();
      break;
    case 'end-turn':
      turns.nextTurn();
      break;
  }
});
