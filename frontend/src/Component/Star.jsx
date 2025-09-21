import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

function Star({ starValue = 5, onRate }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(starValue)].map((_, index) => {
        const currentStarValue = index + 1;
        const isFilled = currentStarValue <= (hover || rating);

        return (
          <span
            key={currentStarValue} // Added unique key prop
            onClick={() => {
              setRating(currentStarValue);
              if (onRate) onRate(currentStarValue); // Safely call onRate if provided
            }}
            onMouseEnter={() => setHover(currentStarValue)}
            onMouseLeave={() => setHover(0)}
          >
            <FaStar
              className={`cursor-pointer text-2xl ${
                isFilled ? "text-yellow-400" : "text-gray-400"
              }`}
            />
          </span>
        );
      })}
    </div>
  );
}

export default Star;