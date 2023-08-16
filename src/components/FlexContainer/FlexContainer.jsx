import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const FlexContainer = ({ direction, justify, align, gap, fullHeight }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `var(--gap, 14px)`,
    padding: `calc( var(--gap, 14px) * 2 )`,
    height: fullHeight ? '100vh' : 'auto',
    boxSizing: 'border-box',
  };

  return(
    <main className="flex-container" style={containerStyle}>
        <Outlet/>
    </main>
  ) 
};

FlexContainer.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  gap: PropTypes.number,
  fullHeight: PropTypes.bool,
  children: PropTypes.node,
};

export default FlexContainer;