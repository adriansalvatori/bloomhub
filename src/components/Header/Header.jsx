import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Header.scss";
import User from '../User';
import Logo from '../Logo';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  const location = useLocation();

  const isIndexRoute = location.pathname === '/';

  return (
    <>
      <header className={`header ${isIndexRoute ? 'header-index' : ''}`}>
        <Logo />
        {!isIndexRoute && <User />}
      </header>
      {!isIndexRoute && <SearchBar />}
    </>
  );
}

export default Header;
