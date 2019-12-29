import randomInt from '../game/randomInt.js';
import Effects from './effects.js';
const rng = randomInt;
const effects = Effects();

export default function Skills() {
  return {
    slash: (mult, target) => {
      return {
        damage: rng(4, 8) * mult,
        energy: 10,
        buff: null,
        debuff: null
      };
    },
    uppercut: (mult, target) => {
      return {
        damage: rng(10, 14) * mult,
        energy: 20,
        buff: null,
        debuff: null
      };
    },
    forcePull: (mult, target) => {
      return {
        damage: 0,
        energy: 0,
        buff: null,
        debuff: effects.disoriented(target)
      };
    },
    focus: (mult, target) => {
      return {
        damage: 0,
        energy: 0,
        buff: effects.focused(target),
        debuff: null
      };
    }
  };
}
