import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import PokeCard from './PokeCard';

import { getPokemons } from '../../services/getPokemons';

import styles from './Pokemons.module.css';


const AllPokemons = () => {
  const { allPokemons, setAllPokemons, loading, setLoading } = useContext(
    AppContext,
  );

  useEffect(() => {
    setLoading(true);
    getPokemons().then((response) => {
      setAllPokemons(response.cards);
      setLoading(false);
      // console.log(response.cards)
    });
  }, []);

  if (loading) return <h1 className={styles.loading}>Loading cards...</h1>;

  return (
    <div className={styles.pokeGrid}>
      {allPokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default AllPokemons;
