import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import styles from './Decks.module.css';

const DeckCard = ({ deck }) => {
  const { myDecks } = useContext(AppContext);

  const history = useHistory();
  const deckIndex = myDecks.indexOf(deck);
  const removeFromDecks = () => {
    myDecks.splice(deckIndex, 1);
    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <Link to={`/deck-detail/${deck.deckId}`}>
        <div className={styles.card} id={deck.deckId}>
          <h3>{deck.deckName}</h3>
        </div>
      </Link>
      <button onClick={removeFromDecks}>Excluir Deck</button>
    </div>
  );
};

DeckCard.propTypes = {
  deck: PropTypes.shape({
    deckId: PropTypes.any,
    deckName: PropTypes.string,
  }),
};

export default DeckCard;
