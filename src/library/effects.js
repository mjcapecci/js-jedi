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
    disoriented: function(target) {
      const duration = 4;
      target.multiplier = target.multiplier / 2;
      this.applyDebuff(target, 'disoriented', duration);
    },
    focused: function(target) {
      const duration = 4;
      target.multiplier = target.multiplier * 2;
      this.applyBuff(target, 'focused', duration);
    }
  };
}
