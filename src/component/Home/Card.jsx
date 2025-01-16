import React from 'react';
import './Card.css';
import MainLink from '../shared/MainLink/MainLink';
import { Link } from "react-router-dom";


const Card = ({ image, title, description, cardBackground, url }) => {
  return (
    <div className="article-categories" style={{ background: cardBackground }}>
      <MainLink href={url}>
        <div className="imageContainer-categories">
          <img src={image} alt={title} style={{ width: 250, height: 230}}/>
        </div>
        <div className="card-content">
          <div className="card-button customShadow animatePulse">
            <h3 className="heading">
              {title}
              <img src="/image/arrow.svg" alt="Arrow Icon" className="arrowIcon" />
            </h3>
          </div>
          <p className="shortDesc">{description}</p>
        </div>
      </MainLink>
    </div>
  );
};

export default Card;
