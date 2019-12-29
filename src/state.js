export default function State() {
  const gameContainer = document.querySelector('.content');
  return {
    start: () => {
      gameContainer.innerHTML = `
      <div class="start-area">
        <h1>Javascript Jedi</h1>
      </div>
      <div class="start-area">
        <h1>Logo</h1>
      </div>
      <div class="start-area">
        <button id="start-game">Start Game</button>
      </div>
      `;
    },
    play: moves => {
      gameContainer.innerHTML = `
      <div class="play-area">
      <h1 id="active-skill">Active Skill</h1>
      </div>
      <div class="play-area players">
        <div id="player-one" class="player"></div>
        <div id="player-two" class="player"></div>
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
      <button id="end-turn">End Turn</button>
      </div>
      `;
    }
  };
}
