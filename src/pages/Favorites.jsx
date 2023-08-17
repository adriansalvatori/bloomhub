import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Columns from '../components/Columns';
import Placeholder from '../assets/images/Placeholder.png';
import useFavoriteList from '../hooks/useFavoriteList';
import productData from '../mocks/productData.json';

const Favorites = () => {
  const { favorites } = useFavoriteList();
  const allProducts = productData.featured.concat(productData.trending);

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = allProducts.filter(product => favorites.includes(product.productId));
    setFavoriteProducts(filteredProducts);
  }, [favorites]);

  return (
    <div className="favorites">
      <Header />
      <h3 className="section-title bold">Your Favorite Products</h3>
      <Columns
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-half"
      >
        {favoriteProducts.map(product => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
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
