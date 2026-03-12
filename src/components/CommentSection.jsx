import React, { useState } from 'react';
import { Form, Button, ListGroup, Card } from 'react-bootstrap';
import { MessageSquare, Send, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useInteraction } from '../context/InteractionContext';
import { useNavigate } from 'react-router-dom';

const CommentSection = ({ movieId }) => {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuth();
  const { addComment, getMovieComments } = useInteraction();
  const navigate = useNavigate();
  
  const movieComments = getMovieComments(movieId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login', { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    if (newComment.trim()) {
      addComment(movieId, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section mt-5 pb-5">
      <h4 className="text-white fw-bold mb-4 d-flex align-items-center gap-2">
        <MessageSquare size={24} className="text-primary" />
        Comentarios ({movieComments.length})
      </h4>

      {/* Formulario de comentario */}
      <Card className="bg-dark border-secondary border-opacity-10 mb-4 rounded-4 overflow-hidden shadow">
        <Card.Body className="p-4">
          {user ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe tu opinión sobre la película..."
                  className="bg-white text-dark border-secondary border-opacity-25 focus-ring shadow-none custom-textarea"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" className="rounded-pill px-4 d-flex align-items-center gap-2 fw-bold">
                  <Send size={18} /> Publicar Comentario
                </Button>
              </div>
            </Form>
          ) : (
            <div className="text-center py-3">
              <p className="text-secondary mb-3">Inicia sesión para dejar un comentario</p>
              <Button variant="outline-primary" onClick={() => navigate('/login')} className="rounded-pill px-4">
                Ir a Iniciar Sesión
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Lista de comentarios */}
      <ListGroup variant="flush" className="bg-transparent">
        {movieComments.length > 0 ? (
          [...movieComments].reverse().map((comment) => (
            <ListGroup.Item key={comment.id} className="bg-transparent border-secondary border-opacity-10 px-0 py-4">
              <div className="d-flex gap-3">
                <div className="flex-shrink-0">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-circle">
                    <User size={24} />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="text-white mb-0 fw-bold">{comment.username}</h6>
                    <span className="text-secondary x-small">{comment.date}</span>
                  </div>
                  <p className="text-white mb-0 mt-2 lh-base">
                    {comment.text}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <div className="text-center py-5">
            <p className="text-secondary">Aún no hay comentarios. ¡Sé el primero en opinar!</p>
          </div>
        )}
      </ListGroup>
    </div>
  );
};

export default CommentSection;
