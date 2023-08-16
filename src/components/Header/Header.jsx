import React from 'react';
import "./Header.scss";
import User from '../User';
import Logo from '../Logo';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <>
     <header className="header">
        <Logo/>
        <User/>
      </header>
      <SearchBar />
    </>
  );
}

export default Header;