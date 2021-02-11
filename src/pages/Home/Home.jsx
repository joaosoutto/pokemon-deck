import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../context/AppContext';

import AllDecks from '../../components/Decks/AllDecks';
import SearchInput from '../../components/SearchInput/SearchInput';
import NoDecks from '../../components/NoDecks/NoDecks';

import styles from './Home.module.css';

const Home = () => {
  const { makeNewDeck, myDecks } = useContext(AppContext);

  const [filter, setFilter] = useState('');
  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <section className={`animeLeft ${styles.sec}`}>
      <div className={styles.content}>
        <SearchInput placeHolder="Procurar deck..." handleChange={handleChange} />
        <button type="button" onClick={() => makeNewDeck()}>
          Novo Deck
        </button>
      </div>
      <div className={styles.decks}>
        {myDecks.length === 0 ? <NoDecks /> : <AllDecks filter={filter} />}
      </div>
    </section>
  );
};

export default Home;
