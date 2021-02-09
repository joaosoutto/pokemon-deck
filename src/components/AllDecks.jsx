import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DeckCard from './DeckCard';

const AllDecks = () => {
  const { myDecks } = useContext(AppContext);

  //   if (myDecks.length === 0) return <h1>You dont have decks yet...</h1>

  return (
    // {myDecks.map((deck) => (
    // <div>
    // <DeckCard id={deck.deckId} deck={deck} />
    // </div>))}
    // </div>

    <div>
      {myDecks.length > 0 ? (
        myDecks.map((deck) => (
        //   <div 
            <DeckCard key={deck.deckId} deck={deck} />
        //   </div>
        ))
      ) : (
        <h1>You dont have decks yet.</h1>
      )}
    </div>
  );
};

export default AllDecks;
