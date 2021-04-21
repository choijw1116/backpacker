import React from 'react';
import Rating from './Rating';
import '../css/CardJustRating.css';
import image from '../img/image.jpg';

function CardJustRating() {
  return (
    <>
      <div className="just-outline">
        <img className="just-img" src={image} />
        <section className="justcard-info">
          <p className="justcard-label">Card Label</p>
          <p className="justcard-title">Card Title</p>
          <p className="just-wrap">
            <span className="just-highlight">Hilight</span>
            <span className="just-crossout">Crossout</span>
          </p>
        </section>
        <div className="just-ratingwrap">
          <Rating />
        </div>
      </div>
    </>
  );
}

export default CardJustRating;
