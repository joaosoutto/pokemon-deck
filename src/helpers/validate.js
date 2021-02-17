export const isValid = (name, cards, nameM, cardsM, state) => {
  if (!name) {
    nameM('Seu deck deve ter um nome!');
    state(true);
  }
  if (cards.length < 24 || cards.length > 60) {
    cardsM('Seu deck deve ter entre 24 e 60 cartas');
    state(true);
  }
  if (name.length > 0) {
    nameM('');
  }
  if (cards.length > 23 && cards.length < 61) {
    cardsM('');
  }
  if (name && cards.length > 23 && cards.length < 61) {
    state(false);
  }
};
