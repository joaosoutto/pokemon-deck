import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [myDecks, setMyDecks] = useState([]);
  const [deck, setDeck] = useState([]);
  const [newDeck, setNewDeck] = useState({})

  const [loading, setLoading] = useState(false);

  const context = {
    allPokemons,
    setAllPokemons,
    myDecks,
    setMyDecks,
    deck,
    setDeck,
    loading,
    setLoading,
    newDeck,
    setNewDeck
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
