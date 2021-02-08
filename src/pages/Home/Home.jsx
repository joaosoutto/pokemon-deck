import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        {/* {myDecks.length > 1 ? (
          myDecks.map((deck) => <p>{deck.name}</p>)
        ) : (
          <h1>You dont have decks yet.</h1>
        )} */}
      </div>
    </section>
  );
};

export default Home;
