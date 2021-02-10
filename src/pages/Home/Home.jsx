import React, { useContext, useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import AllDecks from '../../components/Decks/AllDecks';
import DeckCard from '../../components/Decks/DeckCard';
import FilteredDecks from '../../components/Decks/FilteredDecks';
import FilteredPokemons from '../../components/FilteredPokemons';
import SearchInput from '../../components/SearchInput/SearchInput';
import { AppContext } from '../../context/AppContext';

const Home = () => {
  const { myDecks, makeNewDeck } = useContext(AppContext);

  console.log(myDecks);

  const [filter, setFilter] = useState('');
  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <section className={`animeLeft ${styles.sec}`}>
      <div className={styles.content}>
        <SearchInput placeHolder="Search Deck..." handleChange={handleChange} />
        <Link to="new-deck">
          <button className={styles.newDec} type="button" onClick={makeNewDeck}>
            New Deck
          </button>
        </Link>
      </div>
      <div>{filter ? <FilteredDecks filter={filter} /> : <AllDecks />}</div>
    </section>
  );
};

export default Home;
