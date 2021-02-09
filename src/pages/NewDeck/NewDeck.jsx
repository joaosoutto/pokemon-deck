import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import { AppContext } from '../../context/AppContext';
// import PokeCard from '../../components/PokeCard';
import { Link } from 'react-router-dom';
import AllPokemons from '../../components/AllPokemons';
import FilteredPokemons from '../../components/FilteredPokemons';

const NewDeck = () => {
  const {
    deckCards,
    deckName,
    addName,
    saveDeck,
    myDecks,
    setDeckCards,
    setDeckName,
  } = useContext(AppContext);

  const [filter, setFilter] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [nameMessage, setNameMessage] = useState('Your deck must have a name!');
  const [cardsMessage, setCardsMessage] = useState(
    'Your deck must have 24 ~ 60 cards!',
  );

  const isValid = () => {
    if (!deckName) {
      setNameMessage('Your deck must have a name!');
      setIsDisabled(true);
    }
    if (deckName.length > 0) {
      setNameMessage('');
    }
    if (deckCards.length > 3) {
      setCardsMessage('');
    }
    if (deckName && deckCards.length > 3) {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    isValid();
  }, [deckName, deckCards]);

  return (
    <section>
      {cardsMessage && <p>{cardsMessage}</p>}
      {nameMessage && <p>{nameMessage}</p>}
      <input
        type="search"
        placeholder="Search Pokemon"
        onChange={({ target }) => setFilter(target.value)}
      />
      <input
        type="text"
        placeholder="My Deck's name"
        onChange={(e) => addName(e.target.value)}
      />
      <Link to="/">
        <button
          type="button"
          disabled={isDisabled}
          onClick={() => saveDeck(deckName, deckCards)}
        >
          Save Deck
        </button>
      </Link>

      {filter ? <FilteredPokemons filter={filter} /> : <AllPokemons />}
    </section>
  );
};

export default NewDeck;
