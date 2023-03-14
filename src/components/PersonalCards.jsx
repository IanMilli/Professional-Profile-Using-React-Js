import { useState } from "react";
import cn from "classnames";
import {Link, } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function PersonalFlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  function handleFocus() { 
    if (card.variant === "focus") { 
      setShowBack(true); 
    } 
  } 

  function handleBlur() { 
    if (card.variant === "focus") { 
      setShowBack(false); 
    } 
  } 

  return (
    <div
      tabIndex={card.id} 
      className={cn("personalFlip-card-outer", { 
        "focus-trigger": card.variant === "focus" 
      })} 
      onClick={handleClick}
      onFocus={handleFocus} 
      onBlur={handleBlur} 
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front">
          <div className="card-body text-center">
            <h1 className="text-white">{card.title}</h1>
            <p className="card-text fs-1 fw-bold">{card.front}</p>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card.carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card.carousel2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card.carousel3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
        <div className="card back">
          <div className="card-body text-center">
            <p className="card-text cardBackText">{card.back}</p>
            <Link style={{color:'#2f3061'}}to={card.address}  ><h2>{card.linkTitle}</h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalFlipCard;