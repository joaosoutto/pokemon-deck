import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import pkball from '../../assets/pkball.png';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className={styles.ball}>
          <img className={styles.img1} alt="pokeball" src={pkball} />
          <img className={styles.logo} alt="pokemons logo" src={logo} />
          <img className={styles.img} alt="pokeball" src={pkball} />
        </div>
      </Link>
    </header>
  );
};

export default Header;
