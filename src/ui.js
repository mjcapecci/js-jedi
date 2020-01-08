import State from './state.js';
const state = State();

export default function UI() {
  const UISelectors = {
    startGame: document.querySelector('#start-game'),
    endTurn: document.querySelector('#end-turn'),
    deathStar: document.querySelector('.death-star'),
    skillList: document.querySelector('.skill-info'),
    closeList: document.querySelector('.close-list')
  };
  return {
    ui_start: () => {
      state.start();
    },
    ui_play: player => {
      state.play(player.skillset.skills);
    },
    ui_populateSpells: player => {
      state.play(player.skillset.skills);
    },
    ui_printCombatLog: () => {},
    UISelectors
  };
}
