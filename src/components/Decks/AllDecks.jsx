import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import DeckCard from './DeckCard';

import styles from './Decks.module.css';
import snorlax from '../../assets/snorlax.png';

const AllDecks = () => {
  const { myDecks } = useContext(AppContext);

  return (
    <div className={styles.decks}>
      {myDecks.length > 0 ? (
        myDecks.map((deck, index) => <DeckCard key={index} deck={deck} />)
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
