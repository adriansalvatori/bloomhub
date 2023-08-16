import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Avatar from '../assets/images/Avatar.png';
import Button from '../components/Button';

const UserSettings = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Adrián';
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <div className={`user-settings ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <div className="separate-from-header"></div>
      <img
        src={Avatar}
        alt="User Profile"
        className="user-image is-centered"
      />
      <h3 className="username bold is-centered">{username}</h3>
      <div className="separate-from-top"></div>
      <Button
        size="is-fullwidth"
        color={darkMode ? 'is-light' : 'is-dark'}
        icon={darkMode ? 'sun' : 'moon'}
        onClick={handleDarkModeToggle}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
      <div className="separate-from-top"></div>
      <Button 
        size="is-fullwidth"
        color='is-light'
        icon='signOut'
        onClick={handleSignOut}>
        Sign Out
      </Button>
      <div className="separate-from-footer"></div>
      <Navigation />
    </div>
  );
};

export default UserSettings;
