import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const StarRating = ({ initialRating = 0, onRate, readonly = false }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleRating = (value) => {
    if (readonly) return;
    if (!user) {
      navigate('/login', { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    onRate(value);
  };

  return (
    <div className="star-rating d-flex align-items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={24}
          className={`${readonly ? '' : 'cursor-pointer'} transition-all`}
          fill={(hoverRating || initialRating) >= star ? "#ffc107" : "transparent"}
          color={(hoverRating || initialRating) >= star ? "#ffc107" : "#6c757d"}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          onClick={() => handleRating(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
