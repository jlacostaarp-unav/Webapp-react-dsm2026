import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { User, Lock, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isLogin) {
        login(username, password);
      } else {
        register(username, password);
      }
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page py-5 d-flex align-items-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5} xl={4}>
            <div className="auth-card bg-dark p-4 p-sm-5 rounded-4 border border-secondary border-opacity-10 shadow-lg blur-bg">
              <div className="text-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary mx-auto mb-3" style={{ width: 'fit-content' }}>
                  {isLogin ? <LogIn size={32} /> : <UserPlus size={32} />}
                </div>
                <h2 className="fw-bold text-white">{isLogin ? 'Iniciar Sesión' : 'Registro'}</h2>
                <p className="text-secondary small">
                  {isLogin ? 'Accede a tu cuenta para gestionar tu lista' : 'Crea una cuenta para empezar'}
                </p>
              </div>

              {error && <Alert variant="danger" className="py-2 small border-0 bg-danger bg-opacity-10 text-danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary small">Usuario</Form.Label>
                  <div className="position-relative">
                    <User className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" size={18} />
                    <Form.Control 
                      type="text" 
                      placeholder="Nombre de usuario" 
                      className="bg-white border-secondary border-opacity-25 text-black py-3 ps-5 rounded-3" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required 
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-secondary small">Contraseña</Form.Label>
                  <div className="position-relative">
                    <Lock className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" size={18} />
                    <Form.Control 
                      type="password" 
                      placeholder="••••••••" 
                      className="bg-white border-secondary border-opacity-25 text-black py-3 ps-5 rounded-3" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 py-3 rounded-pill fw-bold shadow-sm mb-4">
                  {isLogin ? 'Entrar' : 'Registrarse'}
                </Button>

                <div className="text-center">
                  <p className="text-secondary small mb-0">
                    {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                    <button 
                      type="button" 
                      className="btn btn-link text-primary p-0 ms-2 small fw-bold text-decoration-none shadow-none"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
                    </button>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
