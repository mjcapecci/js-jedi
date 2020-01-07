import Animation from './animations.js';

export default function State() {
  const gameContainer = document.querySelector('.content');
  const clearSpellName = () => {
    const activeSpellName = document.querySelector('#active-skill');
    activeSpellName.textContent = '';
  };
  return {
    start: () => {
      gameContainer.innerHTML = `
      <div class="start-area">
        <h1>Logo</h1>
      </div>
      <button id="enter-button">Enter</button>
      `;
    },
    configGame: () => {
      gameContainer.innerHTML = `
      <div class="start-area">

      <div class="start-area">
        <button id="start-game">Start Game</button>
      </div>
      `;
    },
    play: moves => {
      gameContainer.innerHTML = `
      <div class="play-area">
      <h1 id="active-skill"></h1>
      </div>
      <div class="play-area players">
        <div id="left-player" class="player-area">
          <div id="player-one-effects"></div>
          <div id="player-one" class="player"></div>
        </div>
        <div id="right-player" class="player-area">
        <div id="player-two-effects"></div>
          <div id="player-two" class="player"></div>
        </div>
      </div>
      <div class="play-area">
        <div class="spells">
          <button id ="move1" class="spell">${moves[0]}</button>
          <button id ="move2" class="spell">${moves[1]}</button>
          <button id ="move3" class="spell">${moves[2]}</button>
          <button id ="move4" class="spell">${moves[3]}</button>
        </div>
      </div>
      <div class="play-area">
        <div id="combat-log"></div>
      <div class="play-area">
      <button id="end-turn">End Turn</button>
      </div>
      `;
    },
    displaySpellName: spell => {
      Animation().animateSpellName(spell);
      let twoSecond_Timeout = setTimeout(() => {
        clearSpellName();
      }, 2000);
    },
    activateEndTurn: () => {
      const endTurn = document.querySelector('#end-turn');
      endTurn.disabled = false;
    },
    deactivateEndTurn: () => {
      const endTurn = document.querySelector('#end-turn');
      endTurn.disabled = true;
    }
  };
}
