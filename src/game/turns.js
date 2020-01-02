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
