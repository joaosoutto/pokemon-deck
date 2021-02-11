import PropTypes from "prop-types";
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

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  placeHolder: PropTypes.string
}

export default SearchInput;
