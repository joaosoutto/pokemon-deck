import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import PokeCard from '../../components/PokeCard';
import { Link } from 'react-router-dom';
import AllPokemons from '../../components/AllPokemons';

const NewDeck = () => {
  const {
    allPokemons,
    setAllPokemons,
    loading,
    setLoading,
    deck,
    setDeck,
    myDecks,
    setMyDecks,
    newDeck,
    setNewDeck,
  } = useContext(AppContext);

  const [myDeckName, setMyDeckName] = useState('');
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
        onChange={({ target }) => setMyDeckName(target.value)}
      />

      <AllPokemons filter={filter} />
    </section>
  );
};

export default NewDeck;
