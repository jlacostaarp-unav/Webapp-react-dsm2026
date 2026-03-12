import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos al cambiar de usuario
  useEffect(() => {
    if (user) {
      const savedFavorites = localStorage.getItem(`favorites_${user.username}`);
      setFavorites(savedFavorites ? JSON.parse(savedFavorites) : []);
    } else {
      setFavorites([]); // Limpiar si no hay usuario
    }
  }, [user]);

  const toggleFavorite = (movieId) => {
    if (!user) return; // Seguridad extra

    setFavorites(prev => {
      const newFavorites = prev.includes(movieId)
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId];

      localStorage.setItem(`favorites_${user.username}`, JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (movieId) => favorites.includes(movieId);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
