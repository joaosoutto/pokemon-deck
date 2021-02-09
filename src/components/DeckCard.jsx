import React from 'react';
import { Link } from 'react-router-dom';

const DeckCard = ({ deck }) => {
  return (
    <Link to={`/deck-detail/${deck.deckId}`}>
      <div id={deck.deckId}>
        <h3>{deck.deckName}</h3>
      </div>
    </Link>
  );
};

export default DeckCard;
