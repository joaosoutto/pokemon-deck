import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const DeckDetails = (props) => {
  const { myDecks, loading, setLoading } = useContext(AppContext);
  const [deck, setDeck] = useState('');

  // console.log(props.deck.match.params.id)

  // const loadDeck = () => {
  //   setLoading(true);
  //   // console.log(myDecks)

 

  //   // console.log(thisDeck[0]);
  //   // setDeck({...deck, deck: thisDeck[0]});
  //   // setDeck(thisD)
  //   // console.log(deck);
  //   setLoading(false);
  // };

  useEffect(() => {
    // loadDeck();
    // setTimeout(() => {
    //   setLoading(false);
    //   // console.log(deck);
    // }, 2000);
    // let id = props.deck.match.params.id
    // const thisDeck = myDecks.filter((deck) => deck.deckId == id);
    // const thisD = thisDeck[0];
    // console.log(deck)
  }, []);

  let id = props.deck.match.params.id
  const thisDeck = myDecks.filter((deck) => deck.deckId == id);
  const thisD = thisDeck[0];
  console.log(thisD)

  if (loading) return <h1>Loading deck...</h1>;

  return (
    <div>
      <h1>Deck: {thisD.deckName}</h1>

      {thisD.deckCards.map((card) => (
        <p>
          {card.name} - {card.supertype}
        </p>
      ))}
    </div>
  );
};

export default DeckDetails;
