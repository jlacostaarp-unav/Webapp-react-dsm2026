import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-premium bg-dark text-white pt-5 pb-4 mt-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="footer-brand mb-3">
              <h3 className="fw-bold text-primary m-0">VOD<span className="text-white">Stream</span></h3>
            </div>
            <p className="text-secondary small">
              La plataforma de streaming definitiva para los amantes del cine. Disfruta de los últimos estrenos y los grandes clásicos en alta definición.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Youtube size={20} /></a>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-4">Catálogo</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Películas</Link></li>
              <li><Link to="/">Novedades</Link></li>
              <li><Link to="/">Tendencias</Link></li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-4">Soporte</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Cuenta</a></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h5 className="fw-bold mb-4">Newsletter</h5>
            <p className="text-secondary small mb-3">
              Suscríbete para recibir noticias sobre nuevos estrenos y ofertas especiales.
            </p>
            <div className="input-group mb-3 newsletter-group">
              <input 
                type="email" 
                className="form-control bg-transparent text-white border-secondary" 
                placeholder="Tu email..."
                aria-label="Email para newsletter"
              />
              <button className="btn btn-primary px-4" type="button">Unirse</button>
            </div>
          </Col>
        </Row>

        <hr className="my-4 border-secondary opacity-25" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="text-secondary small mb-0">
              © 2026 VODStream. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <div className="legal-links d-flex gap-3 justify-content-center justify-content-md-end">
              <Link to="/legal" className="text-secondary small text-decoration-none">Privacidad</Link>
              <Link to="/legal" className="text-secondary small text-decoration-none">Términos</Link>
              <Link to="/legal" className="text-secondary small text-decoration-none">Cookies</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
