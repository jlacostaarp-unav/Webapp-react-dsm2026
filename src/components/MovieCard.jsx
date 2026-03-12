import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

export const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFavorite(movie.id);
  };
  return (
    <Card className="h-100 shadow-sm border-0 movie-card-hover bg-dark text-white rounded-4 overflow-hidden">
      <Link to={`/movie/${movie.id}`} className="text-decoration-none text-white pos-relative">
        <div className="favorite-btn-wrapper">
          <button 
            className={`btn-favorite ${favorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            aria-label="Añadir a favoritos"
          >
            <Heart size={20} fill={favorite ? "currentColor" : "none"} />
          </button>
        </div>
        <Card.Img variant="top" src={movie.image} alt={movie.title} style={{ height: '350px', objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="mb-0 fw-bold">{movie.title}</Card.Title>
            <Badge bg="primary">{movie.category}</Badge>
          </div>
          
          <div className="d-flex align-items-center mb-3">
            <Star size={16} className="text-warning me-1" fill="currentColor" />
            <span className="fw-semibold">{movie.rating}</span>
          </div>
          
          <Card.Text className="text-secondary small mb-4" style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {movie.description}
          </Card.Text>
          
          <div className="mt-auto">
            <Button variant="outline-light" className="w-100 rounded-pill">Ver Detalles</Button>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};
