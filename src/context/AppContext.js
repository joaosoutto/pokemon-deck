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

  const addCard = (name, supertype) => {
    setDeckCards((cards) => [...cards, {name, supertype}]);
    // console.log(deckCards)
  };

  const addName = (name) => {
    setDeckName(name);
  };

  const saveDeck = (name, cards) => {
    let deckId =
      Math.floor(Math.random() * 101) + Math.floor(Math.random() * 11);

    const newDeck = {
      deckId,
      deckName: name,
      deckCards: cards,
    };

    setMyDecks((arr) => [...arr, newDeck]);
  };

  // useEffect(() => {
  //   console.log(myDecks);
  // }, [myDecks]);

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
    myDecks,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
