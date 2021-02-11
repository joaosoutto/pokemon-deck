import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { getPokemons } from '../../services/getPokemons';
import Loading from '../Loading/Loading';
import NoMatchs from '../NoMatchs/NoMatchs';

import PokeCard from './PokeCard';
import styles from './Pokemons.module.css';

const AllPokemons = ({ filter }) => {
  const { allPokemons, setAllPokemons, loading, setLoading } = useContext(
    AppContext,
  );

  useEffect(() => {
    setLoading(true);
    getPokemons()
      .then((response) => {
        setAllPokemons(response.cards);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

  const filteredPokemonSearch = () => {
    if (filteredPokemons.length === 0) {
      return <NoMatchs />;
    } else {
      return filteredPokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ));
    }
  };

  if (loading) return <Loading />;

  return (
    <div className={styles.pokeGrid}>
      {filter
        ? filteredPokemonSearch()
        : allPokemons.map((pokemon, index) => (
            <PokeCard pokemon={pokemon} key={index} />
          ))}
    </div>
  );
};

export default AllPokemons;
