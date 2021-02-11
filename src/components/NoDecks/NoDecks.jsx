import React from 'react';

import styles from './NoDecks.module.css';
import snorlax from '../../assets/snorlax.png';

const NoDecks = () => {
  return (
    <div className={styles.div}>
      <img alt="Snorlax sleeping" src={snorlax} />
      <h3>Você ainda não possui nenhum deck</h3>
    </div>
  );
};

export default NoDecks;
