import React from 'react';
import { Link } from 'react-router-dom';

const DeckCard = ({ deck }) => {
  let deckId = Math.floor(Math.random() * 101) + Math.floor(Math.random() * 11);

  return (
    <Link to={`/deck-detail/${deckId}`}>
      <div id={deckId}>
        <h3>{deck.deckName}</h3>
      </div>
    </Link>
  );
};

export default DeckCard;
