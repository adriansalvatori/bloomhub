import { useState, useEffect } from 'react';

const BASKET_KEY = 'basket';

const useBasketList = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem(BASKET_KEY)) || [];
    setBasket(storedBasket);
  }, []);

  const addToBasket = (productId) => {
    const updatedBasket = [...basket, productId];
    setBasket(updatedBasket);
    localStorage.setItem(BASKET_KEY, JSON.stringify(updatedBasket));
  };

  const removeFromBasket = (productId) => {
    const updatedBasket = basket.filter(id => id !== productId);
    setBasket(updatedBasket);
    localStorage.setItem(BASKET_KEY, JSON.stringify(updatedBasket));
  };

  return { basket, addToBasket, removeFromBasket };
}

export default useBasketList;
