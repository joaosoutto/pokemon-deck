import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ placeHolder, handleChange }) => {
  return (
    <input
      type="search"
      placeholder={placeHolder}
      onChange={handleChange}
      className={styles.search}
    />
  );
};

export default SearchInput;
