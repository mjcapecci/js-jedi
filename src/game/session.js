import Song from '../library/audio/bg.mp3';
import Vader from '../library/sprites/DarthVader3.png';
import Dummy from '../library/sprites/trainingDummy1.png';

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
      <audio loop id="song">
        <source src="${song}" type="audio/mp3">
      </audio>
      `;
    },
    training: () => {
      playerOne.innerHTML = `<img src="${Vader}"/>`;
      playerTwo.innerHTML = `<img src="${Dummy}"/>`;
      sessionType = 'training';
    }
  };
}
