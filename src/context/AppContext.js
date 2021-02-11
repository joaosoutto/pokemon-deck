import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const history = useHistory();

  // States -------------------------------------------------------
  const [allPokemons, setAllPokemons] = useState([]);

  const [loading, setLoading] = useState(false);

  const [myDecks, setMyDecks] = useState([]);
  const [deckCards, setDeckCards] = useState([]);
  const [deckName, setDeckName] = useState('');

  // Functions -----------------------------------------------------
  const addCard = (pokemon) => {
    const filter = deckCards.filter(
      (el) => el.pokemon.pokemon.name === pokemon.pokemon.name,
    );

    if (filter.length === 4) return;

    setDeckCards((cards) => [...cards, { pokemon, quantity: 1 }]);
  };

  const removeCards = (pokemon) => {
    const deckIndex = deckCards.indexOf(pokemon);
    deckCards.splice(deckIndex, 1);
    setDeckCards((cards) => [...cards]);
  };

  const addName = (name) => {
    setDeckName(name);
  };

  const makeNewDeck = () => {
    setDeckName('');
    setDeckCards([]);
    history.push('/new-deck');
  };

  const saveDeck = (name, cards) => {
    let deckId = Math.floor(Math.random() * 101 + Math.random() * 101);

    const newDeck = {
      deckId,
      deckName: name,
      deckCards: cards,
    };

    setMyDecks((arr) => [...arr, newDeck]);
  };

  //Context -------------------------------------------------------------
  const context = {
    allPokemons,
    setAllPokemons,
    loading,
    setLoading,
    addCard,
    addName,
    saveDeck,
    deckCards,
    setDeckCards,
    deckName,
    setDeckName,
    myDecks,
    makeNewDeck,
    removeCards,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
