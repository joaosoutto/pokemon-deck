import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import PokeCard from './PokeCard';

import { getPokemons } from '../services/getPokemons';

const AllPokemons = () => {
  const { allPokemons, setAllPokemons, loading, setLoading } = useContext(
    AppContext,
  );

  useEffect(() => {
    setLoading(true);
    getPokemons().then((response) => {
      setAllPokemons(response.cards);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading cards...</h1>;

  return (
    <div>
      {allPokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default AllPokemons;
