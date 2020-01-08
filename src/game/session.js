import Song from '../library/audio/bg.mp3';
import Vader from '../library/sprites/DarthVader3.png';
import Dummy from '../library/sprites/trainingDummy.png';

// Vader Animations
import vaderSlash from '../library/sprites/DarthVader_slash.gif';
import vaderUppercut from '../library/sprites/DarthVader_uppercut.gif';
import vaderPull from '../library/sprites/DarthVader_pull.gif';
import vaderFocus from '../library/sprites/DarthVader_focus.gif';

// Dummy Animations
import dummyStars from '../library/sprites/dummyStars.gif';

export default function Session() {
  const gameContainer = document.querySelector('.content');
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
          move = [vaderSlash, dummyStars];
          break;
        case 2:
          move = [vaderSlash, dummyStars];
          break;
        case 3:
          move = [vaderPull];
          break;
        case 4:
          move = [vaderFocus];
          break;
      }

      setTimeout(() => {
        playerOne.innerHTML = `<img src="${move[0]}"/>`;
        if (move[1]) {
          playerTwo.innerHTML = `<img src="${move[1]}"/>`;
        }
      }, 400);
      setTimeout(() => {
        playerOne.innerHTML = `<img src="${Vader}"/>`;
        playerTwo.innerHTML = `<img src="${Dummy}"/>`;
      }, 1400);
    },
    training: () => {
      playerOne.innerHTML = `<img src="${Vader}"/>`;
      playerTwo.innerHTML = `<img src="${Dummy}"/>`;
      sessionType = 'training';
    }
  };
}
