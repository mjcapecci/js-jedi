export default function Animation() {
  const spellDiv = document.querySelector('#active-skill');
  return {
    animateSpellName: function(text, i) {
      if (i === text.length) return;

      i = i | 0;

      const letter = document.createElement('span');
      letter.textContent = text[i];
      spellDiv.appendChild(letter);
      letter.classList.add('enter');

      setTimeout(() => {
        letter.classList.remove('enter');
        Animation().animateSpellName(text, (i += 1));
      }, 20);
    }
  };
}
