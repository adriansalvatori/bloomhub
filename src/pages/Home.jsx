import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Navigation from '../components/Navigation';
import Columns from '../components/Columns';
import Placeholder from '../assets/images/Placeholder.png';
import productData from '../mocks/productData.json'; 

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    setFeaturedProducts(productData.featured);
    setTrendingProducts(productData.trending);
  }, []);

  return (
    <div className="home">
      <Header />
      <h3 className="section-title bold separate-from-top">Featured</h3>
      <Columns
        isCarousel
        desktopSize="is-one-third"
        tabletSize="is-half"
        mobileSize="is-fullwidth"
      >
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            imageSrc={Placeholder}
            title={product.title}
            price={product.price}
            type="is-fullwidth"
          />
        ))}
      </Columns>
      <h3 className="section-title bold">Trending</h3>
      <Columns
        isCarousel
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-half"
      >
        {trendingProducts.map((product) => (
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

export default Home;
