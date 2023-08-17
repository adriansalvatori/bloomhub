import React from 'react';
import PropTypes from 'prop-types';
import {useAutoAnimate} from '@formkit/auto-animate/react'

import './Columns.scss';

const Columns = ({ children, desktopSize, tabletSize, mobileSize, isCarousel }) => {
  const getColumnClassName = (size, prefix) => `${prefix}-${size}`;
  const animationParent = useAutoAnimate();
  return (
    <div className={`columns ${isCarousel ? 'carousel' : ''}`}>
      {React.Children.map(children, (child) => (
        <div
          ref={animationParent}
          className={`column
            ${getColumnClassName(desktopSize, 'desktop')}
            ${getColumnClassName(tabletSize, 'tablet')}
            ${getColumnClassName(mobileSize, 'mobile')}
          `}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  desktopSize: PropTypes.oneOf([
    'is-fullwidth',
    'is-half',
    'is-one-third',
    'is-two-thirds',
    'is-one-fourth',
    'is-one-fifth',
  ]),
  tabletSize: PropTypes.oneOf([
    'is-fullwidth',
    'is-half',
    'is-one-third',
    'is-two-thirds',
    'is-one-fourth',
    'is-one-fifth',
  ]),
  mobileSize: PropTypes.oneOf([
    'is-fullwidth',
    'is-half',
    'is-one-third',
    'is-two-thirds',
    'is-one-fourth',
    'is-one-fifth',
  ]),
  isCarousel: PropTypes.bool,
};

export default Columns;
