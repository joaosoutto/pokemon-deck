import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import { AppContext } from '../../context/AppContext';
// import PokeCard from '../../components/PokeCard';
import { Link } from 'react-router-dom';
import AllPokemons from '../../components/AllPokemons';
import FilteredPokemons from '../../components/FilteredPokemons';
import SearchInput from '../../components/SearchInput';
import { isValid } from '../../helpers/validate';

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
    <section>
      {nameMessage && <p>{nameMessage}</p>}
      {cardsMessage && <p>{cardsMessage}</p>}
      <SearchInput placeHolder="Search Pokemon" handleChange={handleChange} />
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
