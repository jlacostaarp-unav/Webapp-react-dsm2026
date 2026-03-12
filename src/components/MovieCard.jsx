import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Star, Heart, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import { useInteraction } from '../context/InteractionContext';

export const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { user } = useAuth();
  const { getMovieRatingData, getMovieComments } = useInteraction();
  const navigate = useNavigate();
  const favorited = isFavorite(movie.id);
  const ratingData = getMovieRatingData(movie.id);
  const commentCount = getMovieComments(movie.id).length;

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }
    toggleFavorite(movie.id);
  };
  return (
    <Card className="h-100 shadow-sm border-0 movie-card-hover bg-dark text-white rounded-4 overflow-hidden">
      <Link to={`/movie/${movie.id}`} className="text-decoration-none text-white pos-relative">
        <div className="favorite-btn-wrapper">
          <button
            className={`btn-favorite ${favorited ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            title={favorited ? "Quitar de favoritos" : "Añadir a favoritos"}
            aria-label={favorited ? "Quitar de favoritos" : "Añadir a favoritos"}
          >
            <Heart size={20} fill={favorited ? "currentColor" : "none"} />
          </button>
        </div>
        <Card.Img variant="top" src={movie.image} alt={movie.title} style={{ height: '350px', objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="mb-0 fw-bold">{movie.title}</Card.Title>
            <Badge bg="primary">{movie.category}</Badge>
          </div>
          
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="d-flex align-items-center">
              <Star size={16} className="text-warning me-1" fill="currentColor" />
              <span className="fw-semibold">
                {ratingData.count > 0 ? ratingData.average : "-.-"}
              </span>
              <span className="text-secondary small ms-1">({ratingData.count})</span>
            </div>
            
            <div className="d-flex align-items-center text-white-50">
              <MessageSquare size={16} className="me-1" />
              <span className="small fw-semibold">{commentCount}</span>
            </div>
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
