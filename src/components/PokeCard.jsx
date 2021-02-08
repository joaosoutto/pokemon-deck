import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PokeCard = ({ pokemon }) => {
  // const {  } = useContext(AppContext);

  // const addCard = () => {
  //     setDeck([...deck, {name: pokemon.name}])
  // }

  return (
    <div key={pokemon.id}>
      <img
        alt="Pokemons image"
        src={pokemon.imageUrl}
        style={{ width: '350px' }}
        // onClick={addCard(pokemon.name)}
      />
      {/* <h3>{pokemon.name}</h3>
      <h4>{pokemon.nationalPokedexNumber}</h4>
      <h4>{pokemon.supertype}</h4>
      <h5>{pokemon.types}</h5> */}
      <button type="button">Add card to Deck</button>
    </div>
  );
};

export default PokeCard;
