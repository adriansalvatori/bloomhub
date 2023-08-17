import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem('basket')) || []
  );
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const userPreferredMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPreferredMode && localStorage.getItem('darkMode') === null) {
      setDarkMode(true);
      localStorage.setItem('darkMode', JSON.stringify(true));
    }
  }, []);

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

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <GlobalStateContext.Provider
      value={{
        favorites,
        toggleFavorite,
        basket,
        addToBasket,
        removeFromBasket,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
