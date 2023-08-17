import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem('basket')) || []
  );

  const toggleFavorite = (productId) => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter(favId => favId !== productId)
      : [...favorites, productId];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const addToBasket = (productId) => {
    const updatedBasket = [...basket, productId];
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };

  const removeFromBasket = (productId) => {
    const updatedBasket = basket.filter(itemId => itemId !== productId);
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };

  return (
    <GlobalStateContext.Provider
      value={{ favorites, toggleFavorite, basket, addToBasket, removeFromBasket }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
