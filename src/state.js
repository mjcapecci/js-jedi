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
    play: () => {
      gameContainer.innerHTML = `
      <div class="play-area">
      <h1 id="active-skill">Active Skill</h1>
      </div>
      <div class="play-area players">
        <div id="player-one" class="player"></div>
        <div id="player-two" class="player"></div>
      </div>
      <div class="play-area">
      <button>Move 1</button>
      <button>Move 2</button>
      <button>Move 3</button>
      <button>Move 4</button>
      </div>
      <div class="play-area">
      <button id="end-turn">End Turn</button>
      </div>
      `;
    }
  };
}
