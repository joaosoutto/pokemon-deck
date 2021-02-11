import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { isValid } from '../../helpers/validate';

import AllPokemons from '../../components/Pokemons/AllPokemons';
import SearchInput from '../../components/SearchInput/SearchInput';

import styles from './NewDeck.module.css';
import TrashSVG from '../../assets/svg/TrashSVG';

const NewDeck = () => {
  const { deckCards, deckName, addName, saveDeck, removeCards } = useContext(
    AppContext,
  );

  const [filter, setFilter] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [nameMessage, setNameMessage] = useState('Seu deck deve ter um nome!');
  const [cardsMessage, setCardsMessage] = useState(
    'Seu deck deve ter entre 24 e 60 cartas',
  );

  useEffect(() => {
    isValid(
      deckName,
      deckCards,
      setNameMessage,
      setCardsMessage,
      setIsDisabled,
    );
  }, [deckName, deckCards]);

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <section className={`animeLeft ${styles.sec}`}>
      <div className={styles.pokemons}>
        <SearchInput
          placeHolder="Procurar Pokemon..."
          handleChange={handleChange}
        />
        <div className={styles.cardsGrid}>
          {<AllPokemons filter={filter} />}
        </div>
      </div>
      <div className={styles.deck}>
        <input
          type="text"
          placeholder="Nome do Deck"
          onChange={(e) => addName(e.target.value)}
        />
        <Link className={styles.link} to="/">
          <button
            type="button"
            disabled={isDisabled}
            onClick={() => saveDeck(deckName, deckCards)}
          >
            Salvar Deck
          </button>
        </Link>
        <div className={styles.warnings}>
          {nameMessage && <p className={styles.warning}>{nameMessage}</p>}
          {cardsMessage && <p className={styles.warning}>{cardsMessage}</p>}
        </div>
        {deckCards.map((deck, index) => (
          <div
            key={index}
            onClick={() => removeCards(deck)}
            className={styles.remove}
          >
            <p className={styles.pokeName}>{deck.pokemon.pokemon.name}</p>
            <TrashSVG className={styles.svg} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewDeck;
