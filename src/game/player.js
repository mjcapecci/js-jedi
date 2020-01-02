import Skills from '../library/skills.js';
const skills = Skills();

export default function Player(type) {
  this.type = type;
  this.active = false;
  this.health = 100;
  this.energy = 100;
  this.player = null;
  this.target = null;
  this.standardMultiplier = 1;
  this.multiplier = 1;
  this.skillset = {
    move1: () => skills.slash(this.multiplier, this.target),
    move2: () => skills.uppercut(this.multiplier, this.target),
    move3: () => skills.forcePull(this.multiplier, this.target),
    move4: () => skills.focus(this.multiplier, this.player),
    skills: ['Slash', 'Uppercut', 'Force Pull', 'Focus']
  };
  this.active = false;
  this.buffs = {};
  this.debuffs = {};
  if (type === 'CPU') {
    this.standardMultiplier = 1.5;
    this.multiplier = 1.5;
  }
  if (type === 'Dummy') {
    this.health = 100000;
  }
}
