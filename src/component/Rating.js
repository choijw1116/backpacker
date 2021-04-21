import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../css/Rating.css';

function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="line">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label className="label">
            <input
              type="radio"
              name="rating"
              className="rate"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={20}
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffcc00' : '#f2f2f2'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Rating;
