import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import styles from './DeckDetails.module.css';

const DeckDetails = (props) => {
  const { myDecks } = useContext(AppContext);

  let id = props.deck.match.params.id;
  const thisDeck = myDecks.filter((deck) => deck.deckId == id);
  const thisD = thisDeck[0];
  // console.log(thisD)

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
    <section className={`animeLeft ${styles.sec}`}>
      <h1>{thisD.deckName}</h1>

      <h3>Pokemons cards: {countPokemons}</h3>
      <h3>Trainers cards: {countTrainers}</h3>

      <h4>Number of colors: {types.size}</h4>
      <h4>Total cards: {allCards}</h4>

    </section>
  );
};

export default DeckDetails;
