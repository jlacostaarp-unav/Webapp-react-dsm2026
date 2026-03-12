import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado (simulación)');
  };

  return (
    <div className="contact-page py-5 mt-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="display-4 fw-bold text-white mb-3">Contacta con Nosotros</h1>
            <p className="lead text-secondary">¿Tienes alguna duda o sugerencia? Estamos aquí para ayudarte.</p>
          </Col>
        </Row>

        <Row className="g-5">
          <Col lg={4}>
            <div className="contact-info bg-dark p-4 rounded-4 border border-secondary border-opacity-10 h-100">
              <h4 className="text-white fw-bold mb-4">Información de Contacto</h4>
              
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bg-primary bg-opacity-10 p-2 rounded-3 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h6 className="text-white mb-1">Email</h6>
                  <p className="text-secondary small">soporte@vodreact.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bg-primary bg-opacity-10 p-2 rounded-3 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h6 className="text-white mb-1">Teléfono</h6>
                  <p className="text-secondary small">+34 948 16 90 60</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary bg-opacity-10 p-2 rounded-3 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h6 className="text-white mb-1">Oficina Central</h6>
                  <p className="text-secondary small">Av. Cataluña, s/n, 31006 Pamplona, Navarra</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-top border-secondary border-opacity-10">
                <h6 className="text-white mb-3">Síguenos</h6>
                <div className="d-flex gap-2">
                  {/* Aquí irían los iconos de redes sociales si los tenemos */}
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-circle text-secondary small">TW</div>
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-circle text-secondary small">IG</div>
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-circle text-secondary small">FB</div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="contact-form bg-dark p-5 rounded-4 border border-secondary border-opacity-10">
              <h4 className="text-white fw-bold mb-4">Envíanos un mensaje</h4>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-secondary small">Nombre Completo</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Tu nombre..." 
                        className="bg-dark-light border-secondary border-opacity-25 text-white py-3 px-4 rounded-3" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-secondary small">Correo Electrónico</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="tu@email.com" 
                        className="bg-dark-light border-secondary border-opacity-25 text-white py-3 px-4 rounded-3" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Label className="text-secondary small">Asunto</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="¿En qué podemos ayudarte?" 
                    className="bg-dark-light border-secondary border-opacity-25 text-white py-3 px-4 rounded-3" 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="text-secondary small">Mensaje</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Escribe tu mensaje aquí..." 
                    className="bg-dark-light border-secondary border-opacity-25 text-white py-3 px-4 rounded-3" 
                    required 
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2">
                  <Send size={18} /> Enviar Mensaje
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
