import React from 'react';
import PropTypes from 'prop-types';
import "./Header.scss";
import User from '../User';
import Logo from '../Logo';

const Header = ({ logoUrl }) => {
  return (
    <header className="header">
      <Logo/>
      <User/>
    </header>
  );
}

Header.propTypes = {
  logoUrl: PropTypes.string.isRequired,
}

export default Header;