import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import styles from './DeckDetails.module.css';

const DeckDetails = (props) => {
  const { myDecks } = useContext(AppContext);

  // Filtering deck by ID from all decks ----------------------------------------
  let id = props.deck.match.params.id;
  const currentDeck = myDecks.find((deck) => deck.deckId == id);

  // Counting cards -------------------------------------------------------------
  const countPokemons = currentDeck.deckCards.reduce(
    (acc, cur) => (cur.pokemon.pokemon.supertype === 'Pokémon' ? ++acc : acc),
    0,
  );

  const countTrainers = currentDeck.deckCards.reduce(
    (acc, cur) => (cur.pokemon.pokemon.supertype === 'Trainer' ? ++acc : acc),
    0,
  );

  const countEnergy = currentDeck.deckCards.reduce(
    (acc, cur) => (cur.pokemon.pokemon.supertype === 'Energy' ? ++acc : acc),
    0,
  );

  const allCards = countTrainers + countPokemons + countEnergy;

  // Counting types -------------------------------------------------------------
  let countTypes = [];
  currentDeck.deckCards.map(({ pokemon }) =>
    countTypes.push(pokemon.pokemon.types),
  );
  let typesString = countTypes.map(JSON.stringify);
  let types = new Set(typesString);

  console.log(currentDeck)

  // Getting images -------------------------------------------------------------

  const uniqueCards = (superType) => {
    const cards = currentDeck.deckCards.filter(
      (card) => card.pokemon.pokemon.supertype === `${superType}`,
    );
    const images = cards.map((deck, index) => (
      <img
        className={styles.cards}
        key={index}
        src={deck.pokemon.pokemon.imageUrl}
        alt="Card Image"
      />
    ));
    const uniqueImages = [
      ...new Map(images.map((item) => [item.props.src, item])).values(),
    ];
    return uniqueImages;
  };

  const pokeCards = uniqueCards('Pokémon');
  const trainerCards = uniqueCards('Trainer');
  const energyCards = uniqueCards('Energy');

  return (
    <section className={`animeLeft ${styles.sec}`}>
      <div className={styles.info}>
        <h1>{currentDeck.deckName}</h1>

        <h3>Número de cores: {types.size}</h3>
        <h3>Total de cartas: {allCards}</h3>
      </div>
      <div className={styles.miniCards}>
        {pokeCards.length !== 0 && (
          <div className={styles.grid}>
            <h3>Cartas de Pokemon ({countPokemons}):</h3>
            <div className={styles.cardGrid}>{pokeCards}</div>{' '}
          </div>
        )}
        {trainerCards.length !== 0 && (
          <div className={styles.grid}>
            <h3>Cartas de Treinador ({countTrainers}):</h3>
            <div className={styles.cardGrid}>{trainerCards}</div>{' '}
          </div>
        )}
        {energyCards.length !== 0 && (
          <div className={styles.grid}>
            <h3>Cartas de energia ({countEnergy}):</h3>
            <div className={styles.cardGrid}>{energyCards}</div>
          </div>
        )}
      </div>
    </section>
  );
};

DeckDetails.propTypes = {
  deck: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.any,
      }),
    }),
  }),
};

export default DeckDetails;
