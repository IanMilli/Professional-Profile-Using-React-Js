import { useState } from "react";
import cn from "classnames";
import {Link, } from "react-router-dom";

function FlipCard({ card }) {
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

export default FlipCard;