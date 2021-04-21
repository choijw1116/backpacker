import React from 'react';
import Rating from './Rating';
import '../css/Horizontal.css';
import image from '../img/image.jpg';

function Horizontal() {
  return (
    <>
      <div className="h-outline">
        <img className="img" src={image} />
        <section className="h-info">
          <p className="h-label">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="h-title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{' '}
          </p>
          <div className="h-rating">
            <Rating />
            <p className="h-ratingtext">| John Doe</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Horizontal;
