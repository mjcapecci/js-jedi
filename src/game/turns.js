export default function Turns() {
  let currentTurn = 0;
  return {
    beginTurn: player => {
      player.active = true;
      currentTurn++;
    },
    nextTurn: () => {
      console.log('hello');
    }
  };
}
