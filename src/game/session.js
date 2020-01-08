import Song from '../library/audio/bg.mp3';
import Vader from '../library/sprites/DarthVader_slash.gif';
import Dummy from '../library/sprites/trainingDummy.png';

// Spell animations
import Slash from '../library/sprites/slash.gif';
import Uppercut from '../library/sprites/uppercut.gif';
import Pull from '../library/sprites/pull.gif';
import Focus from '../library/sprites/focus.gif';

export default function Session() {
  const gameContainer = document.querySelector('.content');
  const spellAnimation = document.querySelector('.spell-animation');
  const playerOne = document.getElementById('player-one');
  const playerTwo = document.getElementById('player-two');
  let sessionType;
  return {
    checkType: () => {
      return sessionType;
    },
    playSong: (song = Song) => {
      gameContainer.innerHTML += `
      <audio id="song">
        <source src="${song}" type="audio/mp3">
      </audio>
      `;
    },
    playSound: (sound = Sound) => {
      let audio = document.createElement('audio');
      audio.src = `${sound}`;
      audio.setAttribute('type', 'audio/mp3');
      gameContainer.appendChild(audio);
      audio.play();
      setTimeout(() => {
        gameContainer.removeChild(audio);
      }, 3000);
    },
    insertAnimation: move => {
      switch (move) {
        case 1:
          move = Slash;
          break;
        case 2:
          move = Uppercut;
          break;
        case 3:
          move = Pull;
          break;
        case 4:
          move = Focus;
          break;
      }
      setTimeout(() => {
        spellAnimation.removeAttribute('style');
        spellAnimation.innerHTML = `
        <img src='${move}' />
        `;
      }, 100);
      setTimeout(() => {
        spellAnimation.setAttribute('style', 'display: none');
      }, 1900);
    },
    training: () => {
      playerOne.innerHTML = `
      <img id="v-anim-1" src="${Vader}"/>
      `;
      playerTwo.innerHTML = `
      <img id="dummy" src="${Dummy}"/>
      `;
      sessionType = 'training';
    }
  };
}
