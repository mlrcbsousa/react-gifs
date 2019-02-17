import React from 'react';

const SearchBar = ({ searchFunction, focusFunction }) => {
  const handleChange = event => searchFunction(event.target.value);
  const handleFocus = () => focusFunction();
  return (
    <input
      type="text"
      className="form-control form-search"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleFocus}
    />
  );
};

export default SearchBar;
