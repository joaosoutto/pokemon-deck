import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const [myDecks, setMyDecks] = useState([]);

  const [newDeck, setNewDeck] = useState({});

  const [deckCards, setDeckCards] = useState([]);
  const [deckName, setDeckName] = useState('');

  const addCard = (name) => {
    setDeckCards((cards) => [...cards, name]);
  };

  const addName = (name) => {
    setDeckName(name);
  };

  const saveDeck = (name, cards) => {
    const body = {
      deckName: name,
      deckCards: cards,
    };

    setNewDeck(body);
    setMyDecks((arr) => [...arr, newDeck]);
  };

  useEffect(() => {
    console.log(myDecks);
  }, [myDecks]);

  const context = {
    allPokemons,
    setAllPokemons,
    loading,
    setLoading,

    addCard,
    addName,
    saveDeck,
    deckCards,
    deckName,
    myDecks,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
