import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Film, User, Search, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      fixed="top"
      className={scrolled ? 'bg-dark shadow-sm' : 'bg-transparent'}
      style={{ transition: 'background-color 0.3s ease', backdropFilter: scrolled ? 'blur(10px)' : 'none' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center fw-bold fs-4 text-white">
          <Film className="me-2 text-primary" />
          VOD<span className="text-primary">React</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-4">
            <Nav.Link as={Link} to="/" className={`${location.pathname === '/' ? 'text-white fw-bold' : 'text-white-50'} px-3`}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white-50 px-3">Películas</Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white-50 px-3">Series</Nav.Link>
            <Nav.Link as={Link} to="/favorites" className={`${location.pathname === '/favorites' ? 'text-white fw-bold' : 'text-white-50'} px-3 d-flex align-items-center gap-2`}>
              Mi Lista
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link href="#search" className="text-white me-3">
              <Search size={20} />
            </Nav.Link>
            <Nav.Link href="#profile" className="text-white">
              <User size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
