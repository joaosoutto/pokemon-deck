import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import { AppContext } from '../../context/AppContext';
// import PokeCard from '../../components/PokeCard';
import { Link } from 'react-router-dom';
import AllPokemons from '../../components/Pokemons/AllPokemons';
import FilteredPokemons from '../../components/Pokemons/FilteredPokemons';
import SearchInput from '../../components/SearchInput/SearchInput';
import { isValid } from '../../helpers/validate';

import styles from './NewDeck.module.css';

const NewDeck = () => {
  const { deckCards, deckName, addName, saveDeck } = useContext(AppContext);

  const [filter, setFilter] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [nameMessage, setNameMessage] = useState('Your deck must have a name!');
  const [cardsMessage, setCardsMessage] = useState(
    'Your deck must have 24 ~ 60 cards!',
  );

  useEffect(() => {
    isValid(
      deckName,
      deckCards,
      setNameMessage,
      setCardsMessage,
      setIsDisabled,
    );
  }, [deckName, deckCards]);

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <section className={`animeLeft ${styles.sec}`}>
      <div className={styles.pokemons}>
        <SearchInput placeHolder="Search Pokemon" handleChange={handleChange} />
        <div className={styles.cardsGrid}>
          {filter ? <FilteredPokemons filter={filter} /> : <AllPokemons />}
        </div>
      </div>
      <div className={styles.deck}>
        <Link className={styles.link} to="/">
          <button
            type="button"
            disabled={isDisabled}
            onClick={() => saveDeck(deckName, deckCards)}
          >
            Save Deck
          </button>
        </Link>
        <input
          type="text"
          placeholder="My Deck's name"
          onChange={(e) => addName(e.target.value)}
        />
        <div className={styles.warnings}>
          {nameMessage && <p className={styles.warning}>{nameMessage}</p>}
          {cardsMessage && <p className={styles.warning}>{cardsMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default NewDeck;
