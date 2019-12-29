export default function Turns() {
  let currentTurn = 0;
  return {
    checkTurn: () => {
      return currentTurn;
    },
    beginTurn: player => {
      player.active = true;
      currentTurn++;
    },
    nextTurn: nextPlayer => {
      console.log(nextPlayer);
      currentTurn++;
    }
  };
}
