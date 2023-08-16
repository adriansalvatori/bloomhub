import React from 'react';
import PropTypes from 'prop-types';
import { IconContext, SignIn, UserFocus, MagnifyingGlass, Heart, Basket, HouseLine, Scan, User, Moon, PlusCircle, MinusCircle, Trash, SignOut, ArrowRight } from '@phosphor-icons/react';
import "./Icon.scss";

const Icon = ({ name, color, accent }) => {
  const icons = {
    signIn: <SignIn />,
    userFocus: <UserFocus />,
    magnifyingGlass: <MagnifyingGlass />,
    heart: <Heart />,
    basket: <Basket />,
    houseLine: <HouseLine />,
    scan: <Scan />,
    user: <User />,
    moon: <Moon />,
    plusCircle: <PlusCircle />,
    minusCircle: <MinusCircle />,
    trash: <Trash />,
    signOut: <SignOut />,
    arrowRight: <ArrowRight />,
  };

  return (
    <IconContext.Provider
      value={{
        color: color,
        duotoneSecondaryColor: accent,
        size: 32,
        weight: 'duotone',
        mirrored: false,
      }}
    >
      <span className="icon">
        {icons[name] || null}
      </span>
    </IconContext.Provider>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    'signIn',
    'userFocus',
    'magnifyingGlass',
    'heart',
    'basket',
    'houseLine',
    'scan',
    'user',
    'moon',
    'plusCircle',
    'minusCircle',
    'trash',
    'signOut',
    'arrowRight',
  ]).isRequired,
  color: PropTypes.string,
  accent: PropTypes.string,
};

export default Icon;
