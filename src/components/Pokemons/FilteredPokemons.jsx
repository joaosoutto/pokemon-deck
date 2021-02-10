import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import PokeCard from './PokeCard';
import styles from './Pokemons.module.css';

const FilteredPokemons = ({ filter }) => {
  const { allPokemons } = useContext(AppContext);

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

  const filteredPokemonSearch = () => {
    if (filteredPokemons.length === 0) {
      return <p className={styles.noMatch}>No matchs found!</p>;
    } else {
      return filteredPokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ));
    }
  };

  return <div className={styles.pokeGrid}>{filteredPokemonSearch()}</div>;
};

export default FilteredPokemons;
