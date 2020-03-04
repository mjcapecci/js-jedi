# Star Wars: Training Dummy

Star Wars: Training Dummy is a JavaScript browser game that puts the player in control of Darth Vader as he practices his powers on a training dummy.

## Description

The point of Star Wars: Training Dummy is to deplete the dummy's health in as few turns as possible. There are currently three "difficulties" which assign a different amount of health to the dummy for the next game instance. Darth Vader has two skills that deal damage, and two skills that increase the amount of damage he can deal in future turns. Each skill has nuances that must be mastered in order to set a high score for your corresponding difficulty.

## Game Design

This game was designed in such a way that new skills, new effects, PvP and other features can be added in plug and play fashion. All features of the game are routed through the 'Player' function / class which is instantiated twice at the "Start Game" screen. The reason it is intantiated twice is to create a unique player instance for both the user and the dummy. In this way, the dummy instance can be expanded upon to behave as a CPU in a more competitive game mode, or serve as an instance for another player-controlled object in a PvP setting. See the below player function:

```javascript
export default function Player(type) {
  this.type = type;
  this.active = false;
  this.health = 100;
  this.energy = 100;
  this.player = null;
  this.target = null;
  this.standardMultiplier = 1;
  this.multiplier = this.standardMultiplier;
  this.skillset = {
    move1: () => skills.slash(this.multiplier, this.target, this.player),
    move2: () => skills.uppercut(this.multiplier, this.target, this.player),
    move3: () => skills.forcePull(this.multiplier, this.player),
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
    this.health = 50;
  }
}
```

## Authors
Game design, art, music by Michael Capecci. Inspiration for art pulled from image results for the "Star Wars pixel art" Google query. The song that plays at the beginning is a personal recording of "Force Theme" written by John Williams.
