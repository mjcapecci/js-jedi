import State from './state.js';
import Player from './game/player.js';
import UI from './ui.js';
import Session from './game/session.js'; // placeholder for vs CPU & Multiplayer
import Turns from './game/turns.js';
import Skills from './library/skills.js';
import Effects from './library/effects.js';

// Manage State
const state = State();

// Manage Turns
const turns = Turns();

// Use Effects
const effects = Effects();

// Initialize State
function init() {
  state.start();
}

init();

// Manage UI
const ui = UI();

// Initialize Game Control Variables
let p1;
let p2;
let session;
let currentPlayer;

function enterConfig() {
  state.configGame();
  Session().playSong();
  document.querySelector('#song').play();
}

// Initialize Gameplay on Click
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

// Initialize Session According to Parameters (default is 'training' for MVP version of this game)
function startSession(type) {
  session = Session();
  switch (type) {
    case 'training':
      session.training();
  }
}

// Turn-based assignment of active player based on session type and currentTurn value
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

function turnEnd() {
  turns.nextTurn(checkForNextPlayer(p1, p2));
  if (turns.checkForWin(p2)) {
    init();
    return;
  }
  turns.activateSpells();
  state.activateEndTurn();
  purgeEffectsForReApply(p1, p2);
  decrementEffects(p1, p2);
  applyEffectsAttempt(p1, p2);
  console.log(p2.health);
}

function turnAutoEnd() {
  setTimeout(turnEnd, 2000);
}

function executeMove(moveNumber, move) {
  turns.deactivateSpells();
  moveNumber;
  state.displaySpellName(move);
  state.deactivateEndTurn();
  turnAutoEnd();
}

// Console testing utility for UI
document.addEventListener('click', function(e) {
  console.log(e.target.id);
});

// Event Listeners / Handlers (Is there a better spot for these?)
document.addEventListener('click', function(e) {
  switch (e.target.id) {
    case 'enter-button':
      enterConfig();
      break;
    case 'start-game':
      beginPlay();
      break;
    case 'end-turn':
      turnEnd();
      break;
    case 'move1':
      executeMove(
        currentPlayer.skillset.move1(),
        currentPlayer.skillset.skills[0]
      );
      break;
    case 'move2':
      executeMove(
        currentPlayer.skillset.move2(),
        currentPlayer.skillset.skills[1]
      );
      break;
    case 'move3':
      executeMove(
        currentPlayer.skillset.move3(),
        currentPlayer.skillset.skills[2]
      );
      break;
    case 'move4':
      executeMove(
        currentPlayer.skillset.move4(),
        currentPlayer.skillset.skills[3]
      );
      break;
  }
});

// Handling Buffs and Debuffs (Effects)
function decrementEffects(p1, p2) {
  for (let buff in p1.buffs) {
    p1.buffs[buff] -= 1;
  }
  for (let debuff in p1.debuffs) {
    p1.debuffs[debuff] -= 1;
  }
  for (let buff in p2.buffs) {
    p2.buffs[buff] -= 1;
  }
  for (let debuff in p2.debuffs) {
    p2.debuffs[debuff] -= 1;
  }
}

function purgeEffectsForReApply(p1, p2) {
  p1.multiplier = p1.standardMultiplier;
  p2.multiplier = p2.standardMultiplier;
}

function testForApplyEffects(remainingDuration, effect, effectType, player) {
  if (remainingDuration > 0) {
    effects[effect](player);
  } else {
    delete player[effectType][effect];
  }
}

function applyEffectsAttempt(p1, p2) {
  for (let buff in p1.buffs) {
    testForApplyEffects(p1.buffs[buff], buff, 'buffs', p1);
  }
  for (let debuff in p1.debuffs) {
    testForApplyEffects(p1.debuffs[debuff], debuff, 'debuffs', p1);
  }
  for (let buff in p2.buffs) {
    testForApplyEffects(p2.buffs[buff], buff, 'buffs', p2);
  }
  for (let debuff in p2.debuffs) {
    testForApplyEffects(p2.debuffs[debuff], debuff, 'debuffs', p2);
  }
}
