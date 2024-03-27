import { useState } from 'react';
import './styles.css';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setRating(rating)
  }
  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={60}
          />
        );
      })}
    </div>
  );
}
