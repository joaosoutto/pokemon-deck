import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DeckCard from './DeckCard';

import styles from './Decks.module.css';

import snorlax from '../../assets/snorlax.png'

const AllDecks = () => {
  const { myDecks } = useContext(AppContext);

  //   if (myDecks.length === 0) return <h1>You dont have decks yet...</h1>

  return (
    // {myDecks.map((deck) => (
    // <div>
    // <DeckCard id={deck.deckId} deck={deck} />
    // </div>))}
    // </div>

    <div className={styles.decks}>
      {myDecks.length > 0 ? (
        myDecks.map((deck) => (
          //   <div
          <DeckCard key={deck.deckId} deck={deck} />
          //   </div>
        ))
      ) : (
        <div className={styles.noResults}>
          <img alt="Snorlax sleeping" src={snorlax} />
          <h3>You dont have decks yet.</h3>
        </div>
      )}
    </div>
  );
};

export default AllDecks;
