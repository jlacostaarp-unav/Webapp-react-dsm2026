import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ShieldCheck, Eye, FileText } from 'lucide-react';

const Legal = () => {
  return (
    <div className="legal-page py-5 mt-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="display-4 fw-bold text-white mb-3">Centro Legal</h1>
            <p className="lead text-secondary">Transparencia y seguridad para nuestros usuarios.</p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <div className="legal-card bg-dark p-4 rounded-4 border border-secondary border-opacity-10 text-center h-100 transition-all">
              <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary mx-auto mb-3" style={{ width: 'fit-content' }}>
                <ShieldCheck size={32} />
              </div>
              <h5 className="text-white fw-bold">Aviso Legal</h5>
              <p className="text-secondary small">Términos de uso generales de la plataforma.</p>
              <a href="#aviso" className="text-primary text-decoration-none small">Leer más</a>
            </div>
          </Col>
          <Col md={4}>
            <div className="legal-card bg-dark p-4 rounded-4 border border-secondary border-opacity-10 text-center h-100 transition-all">
              <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary mx-auto mb-3" style={{ width: 'fit-content' }}>
                <Eye size={32} />
              </div>
              <h5 className="text-white fw-bold">Privacidad</h5>
              <p className="text-secondary small">Cómo protegemos y tratamos tus datos.</p>
              <a href="#privacidad" className="text-primary text-decoration-none small">Leer más</a>
            </div>
          </Col>
          <Col md={4}>
            <div className="legal-card bg-dark p-4 rounded-4 border border-secondary border-opacity-10 text-center h-100 transition-all">
              <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary mx-auto mb-3" style={{ width: 'fit-content' }}>
                <FileText size={32} />
              </div>
              <h5 className="text-white fw-bold">Cookies</h5>
              <p className="text-secondary small">Información sobre el uso de cookies.</p>
              <a href="#cookies" className="text-primary text-decoration-none small">Leer más</a>
            </div>
          </Col>
        </Row>

        <div className="mt-5 p-5 bg-dark rounded-4 border border-secondary border-opacity-10" id="aviso">
          <h3 className="text-white fw-bold mb-4">1. Aviso Legal</h3>
          <p className="text-secondary lh-lg">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen a continuación los datos identificativos de la empresa propietaria de VOD React, con domicilio en Av. Cataluña, s/n, 31006 Pamplona, Navarra.
          </p>
          <p className="text-secondary lh-lg">
            Este sitio web ha sido creado con carácter informativo y para uso personal de los usuarios. A través de este Aviso legal, se pretende regular el acceso y uso de este sitio web, así como la relación entre el sitio web y sus usuarios.
          </p>
          
          <h3 className="text-white fw-bold mt-5 mb-4" id="privacidad">2. Política de Privacidad</h3>
          <p className="text-secondary lh-lg">
            VOD React informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través de su sitio web...
          </p>

          <h3 className="text-white fw-bold mt-5 mb-4" id="cookies">3. Política de Cookies</h3>
          <p className="text-secondary lh-lg">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos que acepta su uso.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Legal;
