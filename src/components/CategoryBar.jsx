import React from 'react';
import { Container } from 'react-bootstrap';

const categories = ["Todas", "Acción", "Ciencia Ficción", "Drama", "Animación", "Suspense"];

export const CategoryBar = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-bar-wrapper border-bottom border-secondary border-opacity-10 mb-4 sticky-top">
      <Container>
        <div className="d-flex gap-2 py-3 overflow-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`category-btn px-4 py-2 rounded-pill border-0 transition-all ${
                selectedCategory === category 
                ? 'bg-primary text-white shadow-sm' 
                : 'bg-dark-light text-secondary hover-bg-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};
