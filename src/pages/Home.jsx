import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import ProductCard from '../components/ProductCard';
import Navigation from '../components/Navigation';
import Columns from '../components/Columns';
import SearchBar from '../components/SearchBar';
import Placeholder from '../assets/images/Placeholder.png';
import productData from '../mocks/productData.json'; // Import the JSON data

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = searchQuery => {
    const filteredResults = productData.featured.concat(productData.trending).filter(product => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    // Set the featured and trending products from the JSON data
    setFeaturedProducts(productData.featured);
    setTrendingProducts(productData.trending);
  }, []);

  return (
    <div className="home">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <>
          <h3 className="section-title">Search</h3>
          <Columns
            desktopSize="is-one-fifth"
            tabletSize="is-one-third"
            mobileSize="is-two-thirds"
          >
            {searchResults.map(product => (
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
        </>
      )}
      <h3 className="section-title bold separate-from-top">Featured</h3>
      <Columns
        isCarousel
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-two-thirds"
      >
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.productId}
            imageSrc={Placeholder}
            title={product.title}
            price={product.price}
            type="is-encapsulated"
          />
        ))}
      </Columns>
      <h3 className="section-title bold">Trending</h3>
      <Columns
        isCarousel
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-two-thirds"
      >
        {trendingProducts.map((product) => (
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

export default Home;
