import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const DeckDetails = (props) => {
  const { myDecks } = useContext(AppContext);

  let id = props.deck.match.params.id;
  const thisDeck = myDecks.filter((deck) => deck.deckId == id);
  const thisD = thisDeck[0];

  const countPokemons = thisD.deckCards.reduce(
    (acc, cur) => (cur.pokemon.pokemon.supertype === 'Pokémon' ? ++acc : acc),
    0,
  );
  const countTrainers = thisD.deckCards.reduce(
    (acc, cur) => (cur.pokemon.pokemon.supertype === 'Trainer' ? ++acc : acc),
    0,
  );

  const allCards = countTrainers + countPokemons;

  let countTypes = [];
  thisD.deckCards.map(({ pokemon }) => countTypes.push(pokemon.pokemon.types));
  let typesString = countTypes.map(JSON.stringify);
  let types = new Set(typesString);

  return (
    <div>
      <h1>Deck: {thisD.deckName}</h1>
      <h2>Total cards: {allCards}</h2>

      <h3>Pokemons cards: {countPokemons}</h3>
      <h3>Trainers cards: {countTrainers}</h3>

      <h4>Number of colors: {types.size}</h4>
    </div>
  );
};

export default DeckDetails;
