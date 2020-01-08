import randomInt from '../game/randomInt.js';
import Effects from './effects.js';
import Session from '../game/session';
const rng = randomInt;
const effects = Effects();

// import sound effects
import Uppercut from './audio/boink.mp3';
import Boink from './audio/uppercut.mp3';
import Pull from './audio/pull.mp3';
import Focus from './audio/focus.mp3';

export default function Skills() {
  return {
    slash: (mult, target, player) => {
      const damage = Math.round(rng(4, 8) * mult);
      target.health -= damage;
      const energy = 10;
      const buff = null;
      const debuff = null;
      player.standardMultiplier += 0.1 * mult;

      Session().playSound(Boink);
      return {
        damage,
        energy,
        buff,
        debuff
      };
    },
    uppercut: (mult, target, player) => {
      const damage = Math.round(rng(10, 14) * mult);
      target.health -= damage;
      const energy = 20;
      const buff = null;
      const debuff = effects.tired(player);
      if (player.standardMultiplier > 0.2) {
        player.standardMultiplier -= 0.2;
      }
      Session().playSound(Uppercut);
      return {
        damage,
        energy,
        buff,
        debuff
      };
    },
    forcePull: (mult, target) => {
      const damage = 0;
      const energy = 0;
      const buff = effects.pulled(target);
      const debuff = null;
      Session().playSound(Pull);
      return {
        damage,
        energy,
        buff,
        debuff
      };
    },
    focus: (mult, target) => {
      const damage = 0;
      const energy = 0;
      const buff = effects.focused(target);
      const debuff = null;
      Session().playSound(Focus);
      return {
        damage,
        energy,
        buff,
        debuff
      };
    }
  };
}
