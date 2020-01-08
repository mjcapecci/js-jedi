import Animation from './animations.js';

export default function State() {
  const logoContainer = document.querySelector('.logo-container');
  const gameContainer = document.querySelector('.content');
  const animationsContainer = document.querySelector('.animations-container');
  const clearSpellName = () => {
    const activeSpellName = document.querySelector('#active-skill');
    activeSpellName.textContent = '';
  };
  return {
    start: () => {
      if (logoContainer.hasAttribute('style')) {
        logoContainer.removeAttribute('style');
      }
      gameContainer.setAttribute('style', 'display: none;');
    },
    configGame: () => {
      logoContainer.setAttribute('style', 'display: none;');
      gameContainer.removeAttribute('style');
      gameContainer.innerHTML = `

      <div class="start-area start-header">
        <h1>Welcome to Star Wars: Training Dummy!</h1>
        <h3>Your Objective: Smash the training dummy, and destroy it in as few moves as possible using the provided skills!</h3>
        <br><br>
        <p>Click the Death Star at any time for descriptions of each skill.</p>
      </div>

      <div class="start-area">
        <div class="config-options">
        <h3>Select Game Mode:</h3>
          <select>
            <option value='training'>Training</option>
            <option value="more-options" disabled>Coming Soon: PvP</option>
          </select>
          <h3>Select Dummy Health:</h3>
          <select id="p2-health">
            <option value='100'>Little: 100HP (recommended for beginners)</option>
            <option value='250'>More: 250HP</option>
            <option value='500'>Much: 500HP</option>
          </select>
        </div>
      </div>

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
      <button id="end-turn" style="display: none>End Turn</button>
      </div>
      `;
    },
    initGameInfo: (initialHealth, initialMult) => {
      let infoDiv = document.createElement('div');
      infoDiv.classList.add('infoDiv');
      let turns = document.createElement('h1');
      let health = document.createElement('h1');
      let mult = document.createElement('h1');
      turns.textContent = 'Turn: 1';
      health.textContent = `Health: ${initialHealth}/${initialHealth}`;
      mult.textContent = `Multiplier: ${initialMult}`;
      infoDiv.appendChild(turns);
      infoDiv.appendChild(health);
      infoDiv.appendChild(mult);
      gameContainer.insertBefore(infoDiv, gameContainer.childNodes[7]);
    },
    updateGameInfo: (
      currentTurn,
      currentHealth,
      initialHealth,
      currentMult
    ) => {
      let infoDiv = document.querySelector('.infoDiv');
      infoDiv.childNodes[0].textContent = `Turn: ${currentTurn}`;
      infoDiv.childNodes[1].textContent = `Health: ${currentHealth}/${initialHealth}`;
      infoDiv.childNodes[2].textContent = `Multiplier: ${currentMult.toFixed(
        2
      )}`;
    },
    displaySpellName: spell => {
      Animation().animateSpellName(spell);
      let twoSecond_Timeout = setTimeout(() => {
        clearSpellName();
      }, 2000);
    }
    // activateEndTurn: () => {
    //   const endTurn = document.querySelector('#end-turn');
    //   endTurn.disabled = false;
    // },
    // deactivateEndTurn: () => {
    //   const endTurn = document.querySelector('#end-turn');
    //   endTurn.disabled = true;
    // }
  };
}
