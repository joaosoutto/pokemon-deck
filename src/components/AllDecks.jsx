import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DeckCard from './DeckCard';

const AllDecks = () => {
  const { myDecks } = useContext(AppContext);

  return (
    <div>
      {myDecks.length > 0 ? (
        myDecks.map((deck) => <DeckCard id={deck.deckName} deck={deck} />)
      ) : (
        <h1>You dont have decks yet.</h1>
      )}
    </div>
  );
};

export default AllDecks;
