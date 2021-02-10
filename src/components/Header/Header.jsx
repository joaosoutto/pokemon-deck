import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import pkball from '../../assets/pkball.png'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className={styles.ball}>
        <img className={styles.img} alt="pokeball" src={pkball} />
        {/* <img className={styles.name} src={'https://fontmeme.com/permalink/210209/3f3e0a46a4142924362a713810592df2.png'} alt="PokeDecks" /> */}
        <h1>PokeDecks</h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
