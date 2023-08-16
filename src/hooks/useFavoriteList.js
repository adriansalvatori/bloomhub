import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'favorites';

const useFavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (productId) => {
    console.log('addToFavorites', productId);
    const updatedFavorites = [...favorites, productId];
    setFavorites(updatedFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (productId) => {
    console.log('Remove from favorites', productId)
    const updatedFavorites = favorites.filter(id => id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  return { favorites, addToFavorites, removeFromFavorites };
}

export default useFavoriteList;
