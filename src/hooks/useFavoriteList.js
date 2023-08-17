import { useState, useEffect } from 'react';

const useFavoritesList = () => {
  // Load favorites from local storage if available, or initialize with an empty array
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // State to manage the favorites list
  const [favorites, setFavorites] = useState(initialFavorites);

  // Function to add an item to favorites
  const addToFavorites = (id) => {
    const updatedFavorites = [...favorites, id];
    setFavorites(updatedFavorites);
  };

  // Function to remove an item from favorites
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(favId => favId !== id);
    setFavorites(updatedFavorites);
  };

  // Save favorites to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };
};

export default useFavoritesList;
