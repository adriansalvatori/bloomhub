import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = event => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <Input
        type="is-light"
        icon="magnifyingGlass"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
