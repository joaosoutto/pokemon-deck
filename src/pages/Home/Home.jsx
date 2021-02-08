import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Home = () => {
  const {
    myDecks,
    setMyDecks,
    deck,
    setDeck,
    loading,
    setLoading,
  } = useContext(AppContext);

  useEffect(() => {
 console.log(myDecks)
  }, [])

  return (
    <section>
      <div>
        <h1>My Decks</h1>
        <input type="text" placeholder="Search deck..." />
        <Link to="new-deck">
          <button type="button">New Deck</button>
        </Link>
      </div>
      <div>{loading && <h1>You dont have decks yet.</h1>}</div>
      {myDecks.map(deck => (
        <h1 key={deck.deckName}>{deck.deckName}</h1>
      ))}
    </section>
  );
};

export default Home;
