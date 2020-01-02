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

// Console testing utility for UI
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
      purgeEffectsForReApply(p1, p2);
      decrementEffects(p1, p2);
      applyEffectsAttempt(p1, p2);
      break;
    case 'move1':
      turns.deactivateSpells();
      currentPlayer.skillset.move1();
      break;
    case 'move2':
      turns.deactivateSpells();
      currentPlayer.skillset.move2();
      break;
    case 'move3':
      turns.deactivateSpells();
      currentPlayer.skillset.move3();
      console.log(p2);
      break;
    case 'move4':
      turns.deactivateSpells();
      currentPlayer.skillset.move4();
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
  console.log(p2.multiplier);
}

function testForApplyEffects(remainingDuration, effect, effectType, player) {
  if (remainingDuration > 0) {
    effects[effect](player);
  } else {
    delete player[effectType][effect];
    console.log(p2);
    // console.log(player[effectType][effect]);
  }
}

function applyEffectsAttempt(p1, p2) {
  for (let debuff in p2.debuffs) {
    testForApplyEffects(p2.debuffs[debuff], debuff, 'debuffs', p2);

    // effects[debuff](p2);
    // console.log(effects[debuff]);
  }
}
