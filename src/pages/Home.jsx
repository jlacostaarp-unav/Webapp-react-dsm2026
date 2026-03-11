import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { mockMovies } from '../data/mockMovies';
import { MovieCard } from '../components/MovieCard';
import { HeroCarousel } from '../components/HeroCarousel';

const Home = () => {
  return (
    <>
      {/* Sección Hero con el carrusel */}
      <div className="mb-5">
        <HeroCarousel movies={mockMovies} />
      </div>

      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="fw-bold mb-1 text-white">Tendencias Actuales</h2>
            <p className="text-secondary mb-0">Lo más visto esta semana</p>
          </div>
          <a href="#explore" className="text-primary text-decoration-none fw-medium">
            Explorar todo
          </a>
        </div>
        
        <Row xs={1} md={2} lg={4} className="g-4 mb-5 pb-4">
          {mockMovies.slice(0, 4).map(movie => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="fw-bold mb-1 text-white">Nuevos Lanzamientos</h2>
            <p className="text-secondary mb-0">Recién añadidos al catálogo</p>
          </div>
        </div>
        
        <Row xs={1} md={2} lg={4} className="g-4">
          {[...mockMovies].reverse().slice(0, 4).map(movie => (
            <Col key={`new-${movie.id}`}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
