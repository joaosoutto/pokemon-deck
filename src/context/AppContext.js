import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const history = useHistory();

  // States -------------------------------------------------------
  // Get and set all pokemons from API
  const [allPokemons, setAllPokemons] = useState([]);
  // Loading handle
  const [loading, setLoading] = useState(false);
  // All decks
  const [myDecks, setMyDecks] = useState([]);
  // Deck Cards handle
  const [deckCards, setDeckCards] = useState([]);
  // Deck Name handle
  const [deckName, setDeckName] = useState('');

  // Functions -----------------------------------------------------

  // Add card to deck-----------------------------------------------
  const addCard = (pokemon) => {
    const filter = deckCards.filter(
      (el) => el.pokemon.pokemon.name === pokemon.pokemon.name,
    );

    if (filter.length === 4) return;

    setDeckCards((cards) => [...cards, { pokemon, quantity: 1 }]);
  };

  // Remove card from deck------------------------------------------
  const removeCards = (pokemon) => {
    const deckIndex = deckCards.indexOf(pokemon);
    deckCards.splice(deckIndex, 1);
    setDeckCards((cards) => [...cards]);
  };


  // Add name to deck-----------------------------------------------
  const addName = (name) => {
    setDeckName(name);
  };

  // Clear name and cards-------------------------------------------
  const makeNewDeck = () => {
    setDeckName('');
    setDeckCards([]);
    history.push('/new-deck');
  };

  // Save Deck
  const saveDeck = (name, cards) => {
    let deckId = Math.floor(Math.random() * 101 + Math.random() * 101);

    const newDeck = {
      deckId,
      deckName: name,
      deckCards: cards,
    };

    setMyDecks((arr) => [...arr, newDeck]);
    history.push('/');
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
