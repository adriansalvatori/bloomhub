import React from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Columns from '../components/Columns';
import Placeholder from '../assets/images/Placeholder.png';
import { useGlobalState } from '../hooks/globalState';
import productData from '../mocks/productData.json';

const Basket = () => {
  const { basket } = useGlobalState(); 

  const getProductData = (productId) => {
    const allProducts = [...productData.featured, ...productData.trending];
    const foundProduct = allProducts.find(product => product.productId === productId);
    return foundProduct || {};
  };

  const basketProducts = basket.map(productId => getProductData(productId));

  return (
    <div className="basket">
      <Header />
      <h3 className="section-title bold">Your Basket</h3>
      <Columns
        desktopSize="is-one-fifth"
        tabletSize="is-one-third"
        mobileSize="is-fullwidth"
      >
        {basketProducts.map(product => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            imageSrc={Placeholder}
            title={product.title}
            price={product.price}
            type="is-fullwidth"
            isBasketView={true}
          />
        ))}
      </Columns>
      <div className="separate-from-footer"></div>
      <Navigation />
    </div>
  );
};

export default Basket;
