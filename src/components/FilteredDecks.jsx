import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DeckCard from './DeckCard';

const FilteredDecks = ({ filter }) => {
  const { myDecks } = useContext(AppContext);

  const filteredDecks = myDecks.filter((deck) =>
    deck.deckName.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

  const filteredDecksSearch = () => {
    if (filteredDecks.length === 0) {
      return <p>No matchs found!</p>;
    } else {
      return filteredDecks.map((deck) => (
        <DeckCard deck={deck} key={deck.deckId} />
      ));
    }
  };

  return <div>{filteredDecksSearch()}</div>;
};

export default FilteredDecks;
