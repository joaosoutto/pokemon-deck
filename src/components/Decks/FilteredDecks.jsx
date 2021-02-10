import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import DeckCard from './DeckCard';
import styles from './Decks.module.css';

const FilteredDecks = ({ filter }) => {
  const { myDecks } = useContext(AppContext);

  const filteredDecks = myDecks.filter((deck) =>
    deck.deckName.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

  const filteredDecksSearch = () => {
    if (filteredDecks.length === 0) {
      return <p className={styles.noMatch}>No matchs found!</p>;
    } else {
      return filteredDecks.map((deck) => (
        <DeckCard deck={deck} key={deck.deckId} />
      ));
    }
  };

  return <div className={styles.decks}>{filteredDecksSearch()}</div>;
};

export default FilteredDecks;
