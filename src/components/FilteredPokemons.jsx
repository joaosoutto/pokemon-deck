import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import PokeCard from './PokeCard';

const FilteredPokemons = ({ filter }) => {
  const { allPokemons } = useContext(AppContext);

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

  return <div>{filteredPokemonSearch()}</div>;
};

export default FilteredPokemons;
