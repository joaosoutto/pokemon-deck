import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import AllDecks from '../../components/Decks/AllDecks';
import FilteredDecks from '../../components/Decks/FilteredDecks';
import SearchInput from '../../components/SearchInput/SearchInput';

import styles from './Home.module.css';

const Home = () => {
  const { makeNewDeck } = useContext(AppContext);

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
