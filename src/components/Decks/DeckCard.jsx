import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import EditSVG from '../../assets/svg/EditSVG';
import TrashSVG from '../../assets/svg/TrashSVG';
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
      <div className={styles.btns}>
        <button className={styles.delete} onClick={removeFromDecks}>
          <TrashSVG />
        </button>
        <Link
          className={styles.link}
          to={{
            pathname: `/deck-edit/${deck.deckId}`,
            state: { editing: true },
          }}
        >
          <button className={styles.edit}><EditSVG /></button>
        </Link>
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
