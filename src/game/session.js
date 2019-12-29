import Vader from '../library/sprites/DarthVader3.png';
import Dummy from '../library/sprites/trainingDummy1.png';

export default function Session() {
  const playerOne = document.getElementById('player-one');
  const playerTwo = document.getElementById('player-two');
  let sessionType;
  return {
    checkType: () => {
      return sessionType;
    },
    training: () => {
      playerOne.innerHTML = `<img src="${Vader}"/>`;
      playerTwo.innerHTML = `<img src="${Dummy}"/>`;
      sessionType = 'training';
    }
  };
}
