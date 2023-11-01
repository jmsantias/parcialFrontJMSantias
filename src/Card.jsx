import React from 'react';
import './Card.css';

function Card({ marca, modelo }) {
  return (
    <div className="card">
      <h2>Tu auto favorito es...</h2>
      <p>{marca} {modelo}</p>
    </div>
  );
}

export default Card;