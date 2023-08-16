import React, { useState } from 'react';
import Input from '../Input';
import './SearchBar.scss';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <Input
          color="is-white"
          icon="magnifyingGlass"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
