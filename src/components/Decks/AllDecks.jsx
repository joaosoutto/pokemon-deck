import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import DeckCard from './DeckCard';
import NoMatchs from '../NoMatchs/NoMatchs';

import styles from './Decks.module.css';

const AllDecks = ({ filter }) => {
  const { myDecks } = useContext(AppContext);

  const filteredDecks = myDecks.filter((deck) =>
    deck.deckName.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

  const filteredDecksSearch = () => {
    if (filteredDecks.length === 0) {
      return <NoMatchs />;
    } else {
      return filteredDecks.map((deck) => (
        <DeckCard deck={deck} key={deck.deckId} />
      ));
    }
  };

  return (
    <div className={styles.decks}>
      {filter
        ? filteredDecksSearch()
        : myDecks.map((deck, index) => <DeckCard key={index} deck={deck} />)}
    </div>
  );
};

export default AllDecks;
