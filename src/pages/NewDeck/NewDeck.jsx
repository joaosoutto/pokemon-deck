import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import { AppContext } from '../../context/AppContext';
// import PokeCard from '../../components/PokeCard';
import { Link } from 'react-router-dom';
import AllPokemons from '../../components/AllPokemons';
import FilteredPokemons from '../../components/FilteredPokemons';

const NewDeck = () => {
  const { deckCards, deckName, addName, saveDeck, myDecks } = useContext(
    AppContext,
  );

  const [filter, setFilter] = useState('');

  return (
    <section>
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
        <button type="button" onClick={() => saveDeck(deckName, deckCards)}>
          Save Deck
        </button>
      </Link>

      {filter ? <FilteredPokemons filter={filter} /> : <AllPokemons />}
    </section>
  );
};

export default NewDeck;
