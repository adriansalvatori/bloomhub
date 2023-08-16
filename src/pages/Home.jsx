import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import ProductCard from '../components/ProductCard';
import Navigation from '../components/Navigation';
import Columns from '../components/Columns'; 
import Placeholder from '../assets/images/Placeholder.png'; 

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="search separate-from-header">
        <Input type="is-light" icon="magnifyingGlass" placeholder="Search" />
      </div>
      <h3 className="section-title bold separate-from-top">Featured</h3>
      <Columns
        isCarousel
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-half"
      >
        <ProductCard
          productId={1}
          imageSrc={Placeholder} 
          title="Featured Product 1"
          price={39.99}
          type="is-encapsulated"
        />
        <ProductCard
          productId={2}
          imageSrc={Placeholder} 
          title="Featured Product 2"
          price={49.99}
          type="is-encapsulated"
        />
              <ProductCard
          productId={1}
          imageSrc={Placeholder} 
          title="Featured Product 1"
          price={39.99}
          type="is-encapsulated"
        />
        <ProductCard
          productId={2}
          imageSrc={Placeholder} 
          title="Featured Product 2"
          price={49.99}
          type="is-encapsulated"
        />
      </Columns>
      <h3 className="section-title bold">Trending</h3>
      <Columns
        isCarousel
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-half"
      >
        <ProductCard
          productId={1}
          imageSrc={Placeholder} 
          title="Featured Product 1"
          price={39.99}
          type="is-encapsulated"
        />
        <ProductCard
          productId={2}
          imageSrc={Placeholder} 
          title="Featured Product 2"
          price={49.99}
          type="is-encapsulated"
        />
        <ProductCard
          productId={1}
          imageSrc={Placeholder} 
          title="Featured Product 1"
          price={39.99}
          type="is-encapsulated"
        />
        <ProductCard
          productId={2}
          imageSrc={Placeholder} 
          title="Featured Product 2"
          price={49.99}
          type="is-encapsulated"
        />
      </Columns>
      <div className="separate-from-footer"></div>
      <Navigation />
    </div>
  );
};

export default Home;
