import React from 'react';
import Avatar from '../../assets/images/Avatar.png'
import { useNavigate } from 'react-router-dom';
import './User.scss';

const User = () => {
  const username = localStorage.getItem('username') || 'Adrián';

  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/settings');
  };

  return (
    <div className="user-info" onClick={handleUserClick}>
        <span className="username bold">{username}</span>
        <img src={Avatar} alt="User Avatar" className="user-avatar" />
    </div>
  );
}

export default User;