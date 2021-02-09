import React from 'react';

const SearchInput = ({ placeHolder, handleChange }) => {
  return (
    <input type="search" placeholder={placeHolder} onChange={handleChange} />
  );
};

export default SearchInput;
