import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import styles from './Decks.module.css';


const DeckCard = ({ deck }) => {
  const {myDecks} = useContext(AppContext);

  // const lalala = myDecks.map((item) => item.deckId)
  // console.log(lalala)
  // console.log(indexOf(lalala))

  return (
    <Link to={`/deck-detail/${deck.deckId}`}>
      <div className={styles.card} id={deck.deckId}>
        <h3>{deck.deckName}</h3>
        {/* <button>Remove Deck</button> */}
      </div>
    </Link>
  );
};

export default DeckCard;
