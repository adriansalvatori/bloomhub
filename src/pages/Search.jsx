import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Columns from '../components/Columns';
import Placeholder from '../assets/images/Placeholder.png';
import productData from '../mocks/productData.json'; // Import the JSON data

const Search = () => {
  const { search } = useParams();
  const searchQuery = search.toLowerCase();

  const searchResults = productData.featured.concat(productData.trending).filter(product => {
    return product.title.toLowerCase().includes(searchQuery);
  });

  return (
    <div className="search-results">
      <Header />
      <h3 className="section-title">Search Results for "{searchQuery}"</h3>
      <Columns
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-fullwidth"
      >
        {searchResults.map(product => (
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
      <div className="separate-from-footer"></div>
      <Navigation />
    </div>
  );
};

export default Search;
