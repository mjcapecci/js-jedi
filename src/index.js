import State from './state.js';
import Player from './game/player.js';
import UI from './ui.js';
import Session from './game/session.js'; // placeholder for vs CPU & Multiplayer
import Turns from './game/turns.js';
import Skills from './library/skills.js';

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

let p1;
let p2;
let session;
let currentPlayer;

function beginPlay() {
  p1 = new Player('HUMAN');
  p2 = new Player('Dummy');
  p1.player = p1;
  p2.player = p2;
  p1.target = p2;
  p2.target = p1;
  currentPlayer = p1;
  ui.ui_play(p1);
  turns.beginTurn(p1);
  startSession('training');
}

function startSession(type) {
  session = Session();
  switch (type) {
    case 'training':
      session.training();
  }
  console.log(session.checkType());
}

function checkForNextPlayer(p1, p2) {
  if (!session.checkType() === 'training') {
    if (turns.checkTurn() % 2 === 0) {
      return p2;
    } else {
      return p1;
    }
  } else {
    return p1;
  }
}

document.addEventListener('click', function(e) {
  console.log(e.target.id);
});

// Event Listeners / Handlers (Is there a better spot for these?)
document.addEventListener('click', function(e) {
  switch (e.target.id) {
    case 'start-game':
      beginPlay();
      break;
    case 'end-turn':
      turns.nextTurn(checkForNextPlayer(p1, p2));
      turns.activateSpells();
      break;
    case 'move1':
      turns.deactivateSpells();
      currentPlayer.skillset.move1();
      console.log(p2);
    case 'move2':
      turns.deactivateSpells();
      currentPlayer.skillset.move2();
      console.log(p2);
      break;
    case 'move3':
      turns.deactivateSpells();
      currentPlayer.skillset.move3();
      console.log(p2);
      break;
    case 'move4':
      turns.deactivateSpells();
      currentPlayer.skillset.move4();
      console.log(p2);
      break;
  }
});
