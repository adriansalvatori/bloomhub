import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    // Simulate authentication by saving username to localStorage
    localStorage.setItem('username', username);
    // Redirect to /home on successful authentication
    navigate('/home');
  };

  const handleFacialAuth = () => {
    // Simulate successful facial authentication
    // Redirect to /home on successful facial authentication
    navigate('/home');
  };

  return (
    <>
        <Header/>
        <h1 className='bold'>Hello.</h1>
        <Input
            required
            color="is-primary"
            placeholder="Username"
            value={username}
            size="is-fullwidth"
            onChange={handleUsernameChange}
        />
        <Input
            color="is-primary"
            placeholder="Password"
            value={password}
            size="is-fullwidth"
            onChange={handlePasswordChange}
            type="password"
        />
        <Button color="is-dark" size="is-fullwidth" icon="signIn" onClick={handleSignIn}>
            Sign in
        </Button>
        <Button color="is-primary" size="is-fullwidth" icon="userFocus" onClick={handleFacialAuth}>
            Use Facial auth
        </Button>
        <Link to="/forgot-password">Ups, forgot my password.</Link>
        <Footer>

        </Footer>
    </>
  );
};

export default Login;
