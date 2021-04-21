import React from 'react';
import '../css/CardWithoutRating.css';
import image from '../img/image.jpg';

function CardWithoutRating() {
  return (
    <>
      <div className="cwr-outline">
        <img className="cwr-img" src={image} />
        <section className="cwr-info">
          <p className="cwr-label">Card Label</p>
          <p className="cwr-title">Card Title</p>
          <p className="cwr-wrap">
            <span className="cwr-highlight">Hilight</span>
            <span className="cwr-crossout">Crossout</span>
          </p>
        </section>
      </div>
    </>
  );
}

export default CardWithoutRating;
