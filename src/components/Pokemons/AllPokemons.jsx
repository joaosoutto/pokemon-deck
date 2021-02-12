import React, { useContext, useEffect, useState } from 'react';
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

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPokemons().then((response) => {
      setAllPokemons(response.cards);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (filter) {
      setLoading(true);
      getPokemons(filter).then((response) => {
        setFiltered(response.cards);
        setLoading(false);
      });
    }
  }, [filter]);

  const filteredPokemonSearch = () => {
    if (filtered.length === 0) {
      return <NoMatchs />;
    } else {
      return filtered.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ));
    }
  };

  if (loading) return <Loading />;

  return (
    <div className={styles.pokeGrid}>
      {!filter
        ? allPokemons.map((pokemon, index) => (
            <PokeCard pokemon={pokemon} key={index} />
          ))
        : filteredPokemonSearch()}
    </div>
  );
};

export default AllPokemons;
