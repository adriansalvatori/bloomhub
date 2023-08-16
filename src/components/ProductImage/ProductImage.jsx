import React from 'react';
import PropTypes from 'prop-types';
import "./ProductImage.scss";

const ProductImage = ({ imageUrl, size, offset }) => {
  const imageSize = {
    width: size,
    height: size,
  };

  const scale = 1.15 + offset / size; // Calculate the scaling factor

  const imageStyles = {
    ...imageSize,
    transform: `scale(${scale})`,
    marginTop: `-${offset * 2}px`,
    marginLeft: `-${offset}px`,}
  ;

  return (
    <div className="product-image" style={imageSize}>
      <img src={imageUrl} alt="Product" style={imageStyles} />
    </div>
  );
}

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.oneOf([300, 200, 100]).isRequired,
  offset: PropTypes.number.isRequired,
}

export default ProductImage;
