import React from 'react';
import { Input as MuiInput } from '@mui/base/Input';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import './Input.scss';

const Input = ({ color, icon, size, ...otherProps }) => {
  return (
    <MuiInput 
        className={`input ${color} ${size}`} {...otherProps} 
        endAdornment={icon && <Icon name={icon}/>}
    />
  );
};

Input.propTypes = {
  color: PropTypes.oneOf(['is-primary', 'is-white']),
  icon: PropTypes.string, 
  size: PropTypes.oneOf(['is-fullwidth', 'is-contained']),
};

export default Input;
