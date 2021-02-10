import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const [myDecks, setMyDecks] = useState([]);

  const [newDeck, setNewDeck] = useState({});

  const [deckCards, setDeckCards] = useState([]);
  const [deckName, setDeckName] = useState('');


  const addCard = (pokemon) => {
    setDeckCards((cards) => [...cards, { pokemon }]);

  };

  const addName = (name) => {
    setDeckName(name);
  };

  const makeNewDeck = () => {
    setDeckName('');
    setDeckCards([]);
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
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
