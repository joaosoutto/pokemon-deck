import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ placeHolder, handleChange }) => {
  return (
    <input className={styles.search} type="search" placeholder={placeHolder} onChange={handleChange} />
  );
};

export default SearchInput;
