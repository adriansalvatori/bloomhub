import React from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Columns from '../components/Columns';
import Placeholder from '../assets/images/Placeholder.png';
import useFavoriteList from '../hooks/useFavoriteList';
import productData from '../mocks/productData.json';

const Favorites = () => {
  const { favorites } = useFavoriteList();

  const favoriteProducts = productData.featured.concat(productData.trending).filter(product => {
    return favorites.includes(product.productId);
  });

  return (
    <div className="favorites">
      <Header />
      <h3 className="section-title">Your Favorite Products</h3>
      <Columns
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-two-thirds"
      >
        {favoriteProducts.map(product => (
          <ProductCard
            key={product.productId}
            imageSrc={Placeholder}
            title={product.title}
            price={product.price}
            type="is-encapsulated"
          />
        ))}
      </Columns>
      <div className="separate-from-footer"></div>
      <Navigation />
    </div>
  );
};

export default Favorites;
