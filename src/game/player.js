import Skills from '../library/skills.js';
const skills = Skills();

export default function Player(type) {
  this.type = type;
  this.health = 100;
  this.energy = 100;
  this.target = null;
  this.multiplier = 1;
  this.skillset = {
    move1: () => skills.slash(this.multiplier, this.target),
    move2: () => skills.uppercut(this.multiplier, this.target),
    move3: () => skills.forcePull(this.multiplier, this.target)
  };
  this.active = false;
  this.buffs = {};
  this.debuffs = {};
  if (type === 'CPU') {
    this.multiplier = 1.5;
  }
}
