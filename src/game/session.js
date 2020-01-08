import Song from '../library/audio/bg.mp3';
import Vader from '../library/sprites/DarthVader3.png';
import Dummy from '../library/sprites/trainingDummy.png';

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
    training: () => {
      playerOne.innerHTML = `<img src="${Vader}"/>`;
      playerTwo.innerHTML = `<img src="${Dummy}"/>`;
      sessionType = 'training';
    }
  };
}
