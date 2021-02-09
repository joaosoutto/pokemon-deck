import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllDecks from '../../components/AllDecks';
import DeckCard from '../../components/DeckCard';
import FilteredDecks from '../../components/FilteredDecks';
import FilteredPokemons from '../../components/FilteredPokemons';
import { AppContext } from '../../context/AppContext';

const Home = () => {
  const { myDecks } = useContext(AppContext);

  const [filter, setFilter] = useState('');

  return (
    <section>
      <div>
        <h1>My Decks</h1>
        <input
          type="text"
          placeholder="Search deck..."
          onChange={({ target }) => setFilter(target.value)}
        />
        <Link to="new-deck">
          <button type="button">New Deck</button>
        </Link>
      </div>
      <div>{filter ? <FilteredDecks filter={filter} /> : <AllDecks />}</div>
    </section>
  );
};

export default Home;
