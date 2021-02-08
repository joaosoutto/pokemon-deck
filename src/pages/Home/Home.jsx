import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeckCard from '../../components/DeckCard';
import { AppContext } from '../../context/AppContext';

const Home = () => {
  const { myDecks } = useContext(AppContext);

  return (
    <section>
      <div>
        <h1>My Decks</h1>
        <input type="text" placeholder="Search deck..." />
        <Link to="new-deck">
          <button type="button">New Deck</button>
        </Link>
      </div>
      <div>
        {myDecks.length > 0 ? (
          myDecks.map((deck) => <DeckCard id={deck.deckName} deck={deck} />)
        ) : (
          <h1>You dont have decks yet.</h1>
        )}
      </div>
    </section>
  );
};

export default Home;
