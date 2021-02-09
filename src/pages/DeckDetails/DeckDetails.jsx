import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const DeckDetails = (props) => {
  const { myDecks, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  let id = props.deck.match.params.id;
  const thisDeck = myDecks.filter((deck) => deck.deckId == id);
  const thisD = thisDeck[0];

  const countPokemons = thisD.deckCards.reduce(
    (acc, cur) => (cur.supertype === 'Pokémon' ? ++acc : acc),
    0,
  );
  const countTrainers = thisD.deckCards.reduce(
    (acc, cur) => (cur.supertype === 'Trainer' ? ++acc : acc),
    0,
  );
  const allCards = countTrainers + countPokemons;

  if (loading) return <h1>Loading deck...</h1>;
  return (
    <div>
      <h1>Deck: {thisD.deckName}</h1>
      <h2>Total cards: {allCards}</h2>

      <h3>Pokemons cards: {countPokemons}</h3>
      <h3>Trainers cards: {countTrainers}</h3>

      {/* {thisD.deckCards.map((card, index) => (
        <p key={index}>
          {card.name} - {card.supertype}
        </p>
      ))} */}
    </div>
  );
};

export default DeckDetails;
