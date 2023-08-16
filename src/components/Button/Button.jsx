import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/base/Button';
import Icon from '../Icon';
import "./Button.scss";

const Button = ({ children, color, size, icon, variant, ...otherProps }) => {
  const buttonClassName = `button ${color} ${size} ${variant}`; 

  return (
    <MuiButton className={buttonClassName} {...otherProps}>
      <span className="text">{children}</span>
      {icon && <Icon name={icon} />}
    </MuiButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['is-primary', 'is-dark', 'is-light']),
  icon: PropTypes.string,
  size: PropTypes.oneOf(['is-fullwidth', 'is-contained']),
  variant: PropTypes.oneOf(['', 'is-nude', 'is-rounded']), 
}

Button.defaultProps = {
  variant: '', 
}

export default Button;
