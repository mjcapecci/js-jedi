export default function Turns() {
  let currentTurn = 0;

  return {
    checkTurn: () => {
      return currentTurn;
    },
    checkForWin: player => {
      if (player.health <= 0) {
        alert('Game Over!');
        return true;
      }
    },
    beginTurn: player => {
      player.active = true;
      currentTurn = 0;
      currentTurn++;
    },
    nextTurn: nextPlayer => {
      currentTurn++;
    },
    activateSpells: () => {
      const spellBtns = document.querySelectorAll('.spell');
      spellBtns.forEach(spell => {
        spell.disabled = false;
      });
    },
    deactivateSpells: () => {
      const spellBtns = document.querySelectorAll('.spell');
      spellBtns.forEach(spell => {
        spell.disabled = true;
      });
    }
  };
}
