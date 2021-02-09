import { isValidElement } from 'react';

export const isValid = (name, cards, nameM, cardsM, state) => {
  if (!name) {
    nameM('Your deck must have a name!');
    state(true);
  }
  if (name.length > 0) {
    nameM('');
  }
  if (cards.length > 3) {
    cardsM('');
  }
  if (name && cards.length > 3) {
    state(false);
  }
};
