import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Play, Plus, Star, ArrowLeft, Clock, Calendar, Heart } from 'lucide-react';
import { mockMovies } from '../data/mockMovies';
import { useFavorites } from '../context/FavoritesContext';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = mockMovies.find(m => m.id === parseInt(id));
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = movie ? isFavorite(movie.id) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-white">Película no encontrada</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
      </Container>
    );
  }

  return (
    <div className="movie-detail-wrapper">
      {/* Hero Backdrop Section */}
      <div 
        className="movie-backdrop" 
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(11, 11, 11, 0.4), rgba(11, 11, 11, 1)), url(${movie.image})` }}
      >
        <Container className="h-100 d-flex align-items-end pb-5">
          <Link to="/" className="back-button btn btn-link text-white text-decoration-none mb-4 d-flex align-items-center gap-2">
            <ArrowLeft size={20} /> Volver
          </Link>
          <Row className="w-100 g-4 align-items-center">
            <Col md={4} lg={3} className="d-none d-md-block">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="img-fluid rounded-4 shadow-lg movie-poster-detail" 
              />
            </Col>
            <Col md={8} lg={9}>
              <div className="movie-info-content">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Badge bg="primary" className="px-3 py-2">{movie.category}</Badge>
                  <div className="d-flex align-items-center text-warning gap-1">
                    <Star size={18} fill="currentColor" />
                    <span className="fw-bold">{movie.rating}</span>
                  </div>
                </div>
                <h1 className="display-3 fw-bold text-white mb-3">{movie.title}</h1>
                <div className="d-flex gap-4 text-secondary mb-4 small fw-semibold">
                  <span className="d-flex align-items-center gap-1"><Clock size={16} /> 2h 28m</span>
                  <span className="d-flex align-items-center gap-1"><Calendar size={16} /> 2024</span>
                </div>
                <p className="lead text-light mb-5 max-w-600">
                  {movie.description}
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill d-flex align-items-center gap-2 fw-bold shadow-lg">
                    <Play size={20} fill="currentColor" /> Reproducir
                  </Button>
                  <Button 
                    variant={favorite ? "primary" : "outline-light"} 
                    size="lg" 
                    className="px-4 py-3 rounded-pill d-flex align-items-center gap-2 fw-bold"
                    onClick={() => toggleFavorite(movie.id)}
                  >
                    <Heart size={20} fill={favorite ? "currentColor" : "none"} /> 
                    {favorite ? "En favoritos" : "Añadir a favoritos"}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <div className="detail-section mb-5">
              <h4 className="text-white fw-bold mb-4">Sinopsis</h4>
              <p className="text-secondary lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="detail-section">
              <h4 className="text-white fw-bold mb-4">Reparto Principal</h4>
              <Row className="g-4">
                {[1, 2, 3, 4].map(actor => (
                  <Col key={actor} xs={6} sm={3}>
                    <div className="actor-card text-center">
                      <div className="actor-img mb-2 rounded-circle bg-secondary mx-auto shadow" style={{ width: '80px', height: '80px' }}></div>
                      <h6 className="text-white mb-1 small">Actor {actor}</h6>
                      <p className="text-secondary x-small">Personaje {actor}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={4}>
            <div className="info-sidebar bg-dark p-4 rounded-4 border border-secondary border-opacity-10 shadow">
              <h5 className="text-white fw-bold mb-4">Información Detallada</h5>
              <div className="mb-3">
                <span className="text-secondary small d-block">Director</span>
                <span className="text-white">Christopher Nolan</span>
              </div>
              <div className="mb-3">
                <span className="text-secondary small d-block">Estreno</span>
                <span className="text-white">14 de Julio de 2024</span>
              </div>
              <div className="mb-3">
                <span className="text-secondary small d-block">Idioma Original</span>
                <span className="text-white">Inglés (Subtítulos en Español)</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
