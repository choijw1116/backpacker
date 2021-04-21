import React from 'react';
import Rating from './Rating';
import '../css/Card.css';
import image from '../img/image.jpg';

function Card() {
  return (
    <>
      <div className="outline">
        <img className="img" src={image} />
        <section className="card-info">
          <p className="card-label">Card Label</p>
          <p className="card-title">Card Title</p>
          <p className="wrap">
            <span className="highlight">Hilight</span>
            <span className="crossout">Crossout</span>
          </p>
        </section>
        <div className="ratingwrap">
          <Rating />
          <p className="ratingtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
