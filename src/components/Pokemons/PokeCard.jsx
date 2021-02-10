import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from './Pokemons.module.css';

const PokeCard = ({ pokemon }) => {
  const { addCard } = useContext(AppContext);

  return (
    <img
      className={styles.card}
      key={pokemon.id}
      alt="Pokemons card"
      src={pokemon.imageUrl}
      onClick={() => addCard({ pokemon })}
    />
  );
};

export default PokeCard;
