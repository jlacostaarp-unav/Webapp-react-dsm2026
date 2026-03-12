import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { mockMovies } from '../data/mockMovies';
import { MovieCard } from '../components/MovieCard';
import { useFavorites } from '../context/FavoritesContext';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const { favorites } = useFavorites();
  
  // Obtenemos los objetos completos de las películas favoritas
  const favoriteMovies = mockMovies.filter(movie => favorites.includes(movie.id));

  return (
    <div className="favorites-page py-5 min-vh-100">
      <Container>
        <div className="d-flex align-items-center gap-3 mb-5">
          <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
            <Heart size={32} fill="currentColor" />
          </div>
          <div>
            <h1 className="fw-bold mb-0 text-white">Mis Favoritos</h1>
            <p className="text-secondary mb-0">Tus películas guardadas para ver más tarde</p>
          </div>
        </div>

        {favoriteMovies.length > 0 ? (
          <Row xs={1} md={2} lg={4} className="g-4">
            {favoriteMovies.map(movie => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5 mt-5">
            <div className="mb-4 opacity-20">
              <Heart size={80} className="text-secondary" />
            </div>
            <h3 className="text-white fw-bold">Aún no tienes favoritos</h3>
            <p className="text-secondary mb-4">Explora el catálogo y añade las películas que más te gusten.</p>
            <a href="/" className="btn btn-primary rounded-pill px-5 py-3 fw-bold">
              Explorar Catálogo
            </a>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Favorites;
