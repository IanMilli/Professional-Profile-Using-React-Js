import { useState } from "react";
import cn from "classnames";
import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SoloFlipCard({ card }) {
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
   <div className='wrapper'>
    <div
      tabIndex={card.id} 
      
      className={cn("flip-card-outer ",card.div, { 
        "focus-trigger":card.variant === "focus" 
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
            <h1 className="text-white">{card.name}</h1>
            <p className="card-text fs-1 fw-bold">{card.front}</p>
            <img className="d-block w-100" src={card.image}
          alt={card.name}
        />
          </div>
        </div>
        <div className="card back">
          <div className="card-body text-center">
            <p className="card-text ">{card.description}</p>
            <Button variant="primary" href={card.repo}><i className="fa fa-github"></i>GitHub Repository</Button>{' '}
            <Button variant="primary" href={card.deployed}>{card.deploy_button_label}</Button>{' '}
          </div>
        </div>
      </div>
      
    </div>
    </div>
    
  );
}

export default SoloFlipCard;