import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { mockMovies } from '../data/mockMovies';
import { MovieCard } from '../components/MovieCard';
import { HeroCarousel } from '../components/HeroCarousel';
import { CategoryBar } from '../components/CategoryBar';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Filtrado de películas por categoría
  const filteredMovies = selectedCategory === "Todas" 
    ? mockMovies 
    : mockMovies.filter(movie => movie.category === selectedCategory);

  return (
    <>
      {/* Sección Hero con el carrusel (Solo se muestra en "Todas" o como prefieras, aquí lo dejamos siempre) */}
      <div className="mb-0">
        <HeroCarousel movies={mockMovies.slice(0, 3)} />
      </div>

      <CategoryBar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="fw-bold mb-1 text-white">
              {selectedCategory === "Todas" ? "Catálogo Completo" : selectedCategory}
            </h2>
            <p className="text-secondary mb-0">
              {filteredMovies.length} películas encontradas
            </p>
          </div>
        </div>
        
        {filteredMovies.length > 0 ? (
          <Row xs={1} md={2} lg={4} className="g-4 mb-5 pb-4">
            {filteredMovies.map(movie => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <h4 className="text-secondary">No hay películas en esta categoría todavía.</h4>
          </div>
        )}

        {/* Secciones especiales solo si estamos en "Todas" */}
        {selectedCategory === "Todas" && (
          <>
            <div className="d-flex justify-content-between align-items-end mb-4 mt-5">
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
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
