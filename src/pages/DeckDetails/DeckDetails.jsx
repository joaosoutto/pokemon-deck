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
  const countCards = (type) => {
    const count = currentDeck.deckCards.reduce(
      (acc, cur) => (cur.pokemon.pokemon.supertype === `${type}` ? ++acc : acc),
      0,
    );
    return count;
  };

  const countPokemons = countCards('Pokémon');
  const countTrainers = countCards('Trainer');
  const countEnergy = countCards('Energy');

  // Counting types -------------------------------------------------------------
  let countTypes = [];
  currentDeck.deckCards.map(({ pokemon }) =>
    countTypes.push(pokemon.pokemon.types),
  );

  let typesInString = countTypes.flat();

  let types = new Set(typesInString);
  let arr = [...types];

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
        <div className={styles.types}>
          {arr.map((type, index) => {
            if (type !== undefined) {
              return (
                <img
                  className={styles.typeImg}
                  key={index}
                  src={`${process.env.PUBLIC_URL}/assets/${type}.png`}
                  alt="card type"
                />
              );
            }
          })}
        </div>
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
