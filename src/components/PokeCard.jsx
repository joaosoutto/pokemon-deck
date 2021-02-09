import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PokeCard = ({ pokemon }) => {
  const { addCard } = useContext(AppContext);

  return (
    <div key={pokemon.id}>
      <img
        alt="Pokemons image"
        src={pokemon.images.small}
        onClick={() => addCard(pokemon.name, pokemon.supertype)}
      />
    </div>
  );
};

export default PokeCard;
