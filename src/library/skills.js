import randomInt from '../game/randomInt.js';
import Effects from './effects.js';
const rng = randomInt;
const effects = Effects();

export default function Skills() {
  return {
    slash: (mult, target) => {
      const damage = rng(4, 8) * mult;
      const energy = 10;
      const buff = null;
      const debuff = null;
      target.health -= damage;
      return {
        damage,
        energy,
        buff,
        debuff
      };
    },
    uppercut: (mult, target) => {
      const damage = rng(10, 14) * mult;
      const energy = 20;
      const buff = null;
      const debuff = null;
      target.health -= damage;
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
      const buff = null;
      const debuff = effects.disoriented(target);
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
      return {
        damage,
        energy,
        buff,
        debuff
      };
    }
  };
}
