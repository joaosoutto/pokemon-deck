import React from 'react';
import styles from './NotFound.module.css';

import gloom from '../../assets/gloom.png';


const NotFound = () => {
  return (
    <section className={`animeLeft ${styles.sec}`}>
      <img src={gloom} alt="Pokemon Sleeping" />
      <h1>Página não encontrada</h1>
    </section>
  );
};

export default NotFound;
