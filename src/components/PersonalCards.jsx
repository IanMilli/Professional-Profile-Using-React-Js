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
      className={cn("flip-card-outer", { 
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
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
        <div className="card back">
          <div className="card-body text-center">
            <p className="card-text ">{card.back}</p>
            <Link to={card.address}  ><h2>{card.linkTitle}</h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalFlipCard;