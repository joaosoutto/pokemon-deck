import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import EditSVG from '../../assets/svg/EditSVG';
import TrashSVG from '../../assets/svg/TrashSVG';
import { AppContext } from '../../context/AppContext';

import styles from './Decks.module.css';

const DeckCard = ({ deck }) => {
  const history = useHistory();
  const { myDecks, setDeckCards, setDeckName } = useContext(AppContext);

  const deckIndex = myDecks.indexOf(deck);
  const removeFromDecks = () => {
    myDecks.splice(deckIndex, 1);
    history.push('/');
  };

  const editDeck = (deck) => {
    setDeckName(deck.deckName);
    setDeckCards(deck.deckCards);
    history.push(`/deck-edit/${deck.deckId}`);
  };

  return (
    <div className={styles.wrapper}>
      <Link to={`/deck-detail/${deck.deckId}`}>
        <div className={styles.card} id={deck.deckId}>
          <h3>{deck.deckName}</h3>
        </div>
      </Link>
      <div className={styles.btns}>
        <button className={styles.delete} onClick={removeFromDecks}>
          <TrashSVG />
        </button>

        <button onClick={() => editDeck(deck)} className={styles.edit}>
          <EditSVG />
        </button>
      </div>
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
