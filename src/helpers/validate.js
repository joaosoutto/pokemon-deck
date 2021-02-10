import { isValidElement } from 'react';

export const isValid = (name, cards, nameM, cardsM, state) => {
  if (!name) {
    nameM('Your deck must have a name!');
    state(true);
  }
  if (cards.length < 24 || cards.length > 60) {
    cardsM('Your deck must have 24 ~ 60 cards!');
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
