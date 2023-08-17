import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss'; 
import ProductImage from '../ProductImage'; 
import Button from '../Button';
import useFavoriteList from '../../hooks/useFavoriteList';
import useBasketList from '../../hooks/useBasketList';

const ProductCard = ({ productId, imageSrc, title, price, type }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavoriteList();
  const { basket, addToBasket, removeFromBasket } = useBasketList();

  const isFavorite = favorites.includes(productId);
  const isAddedToBasket = basket.includes(productId);

  const handleFavoriteToggle = (productId) => () => {
    if (isFavorite) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
    console.log(productId, favorites)
  };

  const handleBasketToggle = () => {
    if (isAddedToBasket) {
      removeFromBasket(productId);
    } else {
      addToBasket(productId);
    }
  };

  return (
    <div className={`product-card ${type}`}>
      <ProductImage imageUrl={imageSrc} size={100} offset={15} />
      <Button
          variant="is-nude"
          color={isFavorite ? "is-red" : "is-primary"}
          icon="heart"
          onClick={handleFavoriteToggle(productId)}
      >
          Favorite
      </Button>
      <div className="info">
          <h6 className="product-title">{title}</h6>
          <p className="caption">${price}</p>
      </div>
      <Button
          variant="is-rounded"
          color={isAddedToBasket ? "is-primary" : "is-dark"} // Set color based on isAddedToBasket
          icon="basket"
          onClick={handleBasketToggle}
      >
          {isAddedToBasket ? 'Remove from Cart' : 'Add to Cart'}
      </Button>
    </div>
  );
}

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['is-encapsulated', 'is-fullwidth']),
}

export default ProductCard;
