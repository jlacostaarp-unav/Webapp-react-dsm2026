import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { mockMovies } from './data/mockMovies';
import { MovieCard } from './components/MovieCard';
import { Navigation } from './components/Navigation';
import { HeroCarousel } from './components/HeroCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navigation />

      {/* Sección Hero con el carrusel */}
      <div className="mb-5">
        <HeroCarousel movies={mockMovies} />
      </div>

      <main className="flex-grow-1 py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 className="fw-bold mb-1 text-white">Tendencias Actuales</h2>
              <p className="text-secondary mb-0">Lo más visto esta semana</p>
            </div>
          </div>
          
          <Row xs={1} md={2} lg={4} className="g-4">
            {mockMovies.map(movie => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer className="bg-dark text-center py-4 mt-auto border-top border-secondary">
        <Container>
          <p className="mb-0 text-muted">© 2026 VODReact. Todos los derechos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
