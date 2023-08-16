import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navigation.scss";
import Button from '../Button/';

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="navigation-container"> 
      <Button variant="is-nude" color="is-light" onClick={() => handleNavigate('/home')} icon="houseLine" />
      <Button variant="is-nude" color="is-light" onClick={() => handleNavigate('/favorites')} icon="heart" />
      <Button variant="is-nude" color="is-light" icon="scan" /> {/* No navigation for now.*/}
      <Button variant="is-nude" color="is-light" onClick={() => handleNavigate('/settings')} icon="user" />
      <Button variant="is-nude" color="is-light" onClick={() => handleNavigate('/checkout')} icon="basket" />
    </div>
  );
}

export default Navigation;
