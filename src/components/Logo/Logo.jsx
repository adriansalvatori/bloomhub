import React from 'react';
import ISO from '../../assets/images/Iso.svg'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/home');
  }

  return (
    <div onClick={handleLogoClick} className="logo">
      <img src={ISO} alt="Brand Logo" className="brand-logo" />
    </div>
  );
}

export default Logo;
