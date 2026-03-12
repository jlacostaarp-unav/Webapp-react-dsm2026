import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const { user } = useAuth();
  // ratings: { movieId: [{ userId, rating }, ...] }
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem('global_movie_ratings');
    return saved ? JSON.parse(saved) : {};
  });

  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem('global_movie_comments');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('global_movie_ratings', JSON.stringify(ratings));
  }, [ratings]);

  useEffect(() => {
    localStorage.setItem('global_movie_comments', JSON.stringify(comments));
  }, [comments]);

  const addRating = (movieId, ratingValue) => {
    if (!user) return;

    setRatings(prev => {
      const movieRatings = prev[movieId] || [];
      const hasVoted = movieRatings.some(r => r.username === user.username);
      
      if (hasVoted) return prev; // Bloquear si ya ha votado

      // Nuevo voto
      const newMovieRatings = [...movieRatings, { username: user.username, rating: ratingValue }];

      return {
        ...prev,
        [movieId]: newMovieRatings
      };
    });
  };

  const getMovieRatingData = (movieId) => {
    const movieRatings = ratings[movieId] || [];
    if (movieRatings.length === 0) return { average: 0, count: 0 };
    
    const sum = movieRatings.reduce((acc, r) => acc + r.rating, 0);
    return {
      average: (sum / movieRatings.length).toFixed(1),
      count: movieRatings.length
    };
  };

  const getUserRating = (movieId) => {
    if (!user) return 0;
    const movieRatings = ratings[movieId] || [];
    const userRating = movieRatings.find(r => r.username === user.username);
    return userRating ? userRating.rating : 0;
  };

  const addComment = (movieId, text) => {
    if (!user || !text.trim()) return;

    const newComment = {
      id: Date.now(),
      username: user.username,
      text: text,
      date: new Date().toLocaleString()
    };

    setComments(prev => ({
      ...prev,
      [movieId]: [...(prev[movieId] || []), newComment]
    }));
  };

  const getMovieComments = (movieId) => {
    return comments[movieId] || [];
  };

  return (
    <InteractionContext.Provider value={{ 
      ratings, 
      addRating, 
      getMovieRatingData,
      getUserRating,
      comments,
      addComment,
      getMovieComments 
    }}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = () => {
  const context = useContext(InteractionContext);
  if (!context) {
    throw new Error('useInteraction debe usarse dentro de un InteractionProvider');
  }
  return context;
};
