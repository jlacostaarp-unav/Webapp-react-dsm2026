import React from 'react';
import { Carousel, Button, Container } from 'react-bootstrap';
import { Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroCarousel = ({ movies }) => {
  // Tomamos solo las 3 primeras películas para el hero
  const featuredMovies = movies.slice(0, 3);

  return (
    <Carousel fade controls={false} indicators className="hero-carousel">
      {featuredMovies.map((movie) => (
        <Carousel.Item key={movie.id} className="hero-slide">
          <div 
            className="hero-background w-100 vh-100"
            style={{ 
              backgroundImage: `url(${movie.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Gradiente superpuesto para oscurecer y dar transición al contenido */}
            <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" 
                 style={{ background: 'linear-gradient(to right, rgba(15,17,21,1) 0%, rgba(15,17,21,0.6) 50%, rgba(15,17,21,0) 100%), linear-gradient(to top, rgba(15,17,21,1) 0%, rgba(15,17,21,0) 30%)' }}>
            </div>
            
            <Container className="h-100 d-flex flex-column justify-content-center position-relative z-index-1">
              <div className="hero-content mt-5" style={{ maxWidth: '600px' }}>
                <span className="badge bg-primary mb-3 py-2 px-3 fs-6 rounded-pill">{movie.category}</span>
                <h1 className="display-2 fw-bold text-white mb-3 text-shadow">{movie.title}</h1>
                
                <div className="d-flex align-items-center mb-4 text-white-50">
                  <span className="me-3 fw-bold text-success border border-success rounded px-2 py-1">{movie.rating} / 5</span>
                  <span className="me-3">2026</span>
                  <span>14+</span>
                </div>
                
                <p className="lead text-light mb-5 fs-5">
                  {movie.description}
                </p>
                
                <div className="d-flex gap-3">
                  <Button variant="light" size="lg" className="px-5 py-3 fw-bold d-flex align-items-center rounded-pill shadow-sm">
                    <Play size={24} className="me-2" fill="currentColor" /> Reproducir
                  </Button>
                  <Button 
                    as={Link} 
                    to={`/movie/${movie.id}`} 
                    variant="outline-light" 
                    size="lg" 
                    className="px-5 py-3 fw-bold d-flex align-items-center rounded-pill bg-dark bg-opacity-50 blur-bg text-decoration-none"
                  >
                    <Info size={24} className="me-2" /> Más información
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
