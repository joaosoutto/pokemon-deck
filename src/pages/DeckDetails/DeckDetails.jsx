import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import styles from './DeckDetails.module.css';

const DeckDetails = (props) => {
  const { myDecks } = useContext(AppContext);

  // Filtering deck by ID from all decks ----------------------------------------
  let id = props.deck.match.params.id;
  const thisDeck = myDecks.filter((deck) => deck.deckId == id);
  const thisD = thisDeck[0];

  // Counting cards -------------------------------------------------------------
  const countPokemons = thisD.deckCards.reduce(
    (acc, cur) => (cur.pokemon.pokemon.supertype === 'Pokémon' ? ++acc : acc),
    0,
  );
  const countTrainers = thisD.deckCards.reduce(
    (acc, cur) => (cur.pokemon.pokemon.supertype === 'Trainer' ? ++acc : acc),
    0,
  );

  const allCards = countTrainers + countPokemons;

  // Counting types -------------------------------------------------------------
  let countTypes = [];
  thisD.deckCards.map(({ pokemon }) => countTypes.push(pokemon.pokemon.types));
  let typesString = countTypes.map(JSON.stringify);
  let types = new Set(typesString);

  // Getting images -------------------------------------------------------------
  const images = thisD.deckCards.map((deck) => (
    <img src={deck.pokemon.pokemon.imageUrl} />
  ));
  const uniqueImages = [
    ...new Map(images.map((item) => [item.props.src, item])).values(),
  ];

  return (
    <section className={`animeLeft ${styles.sec}`}>
      <div className={styles.info}>
        <h1>{thisD.deckName}</h1>
        <h3>Pokemons cards: {countPokemons}</h3>
        <h3>Trainers cards: {countTrainers}</h3>
        <h3>Number of colors: {types.size}</h3>
        <h3>Total cards: {allCards}</h3>
      </div>
      <div className={styles.miniCards}>
        {uniqueImages.map((deck, index) => (
          <img key={index} src={deck.props.src} />
        ))}
      </div>
    </section>
  );
};

export default DeckDetails;
