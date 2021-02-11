import React from 'react';
import styles from './Loading.module.css';

import squir from '../../assets/squir.gif';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img alt="Gif" src={squir} />

      <h3>Carregando cards...</h3>
    </div>
  );
};

export default Loading;
