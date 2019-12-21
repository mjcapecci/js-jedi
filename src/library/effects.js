export default function Effects() {
  return {
    applyEffect: (target, effect, duration) => {
      if (!Object.keys(target.debuffs).includes(effect)) {
        target.debuffs[effect] = duration;
      }
    },
    disoriented: function(target) {
      const duration = 4;
      target.multiplier = target.multiplier / 2;
      this.applyEffect(target, 'disoriented', duration);
    }
  };
}
