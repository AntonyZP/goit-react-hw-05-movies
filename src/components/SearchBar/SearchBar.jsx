import { useState } from 'react';
import { PropTypes } from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
            autoComplete="off"
            type="text"
            value={query}
            onChange={handleInput}
            autoFocus
            placeholder="Enter the film name"
        ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = { onSubmit: PropTypes.func.isRequired };