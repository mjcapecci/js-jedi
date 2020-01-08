export default function Effects() {
  return {
    applyDebuff: (target, effect, duration) => {
      if (!Object.keys(target.debuffs).includes(effect)) {
        target.debuffs[effect] = duration;
      }
    },
    applyBuff: (target, effect, duration) => {
      if (!Object.keys(target.buffs).includes(effect)) {
        target.buffs[effect] = duration;
      }
    },
    pulled: function(target) {
      const duration = 2;
      target.multiplier = target.multiplier * 3;
      this.applyBuff(target, 'pulled', duration);
    },
    focused: function(target) {
      const duration = 4;
      target.multiplier = target.multiplier * 2;
      this.applyBuff(target, 'focused', duration);
    },
    tired: function(target) {
      const duration = 3;
      target.multiplier = target.multiplier / 2;
      this.applyDebuff(target, 'tired', duration);
    }
  };
}
