import React from 'react';
import Avatar from '../../assets/images/Avatar.png'
import './User.scss';

const User = () => {
  const username = localStorage.getItem('username') || 'Adrián';

  return (
    <div className="user-info">
        <span className="username bold">{username}</span>
        <img src={Avatar} alt="User Avatar" className="user-avatar" />
    </div>
  );
}

export default User;