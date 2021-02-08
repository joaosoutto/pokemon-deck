import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import PokeCard from './PokeCard';

import { getPokemons } from '../services/getPokemons';

const AllPokemons = ({ filter }) => {
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

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

  const filteredPokemonSearch = () => {
    if (filteredPokemons.length === 0) {
      return <p>No matchs found!</p>;
    } else {
      return filteredPokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ));
    }
  };

  if (loading) return <h1>Loading cards...</h1>;

  return (
    <div>
      {filter
        ? filteredPokemonSearch()
        : allPokemons.map((pokemon) => (
            <PokeCard pokemon={pokemon} key={pokemon.id} />
          ))}
    </div>
  );
};

export default AllPokemons;
