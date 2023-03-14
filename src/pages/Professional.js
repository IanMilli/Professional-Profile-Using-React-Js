import React from "react";
import SoloFlipCard from "../components/DisplayCard.jsx";
import homePic from "../assets/images/homePage.jpg";

import placeholder from '../assets/images/project screenshots/PlaceHolder.png';

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/scss/DisplayCard.scss";
import "../pages/css/solo.css";


const cards = [
  {
    id: "1",
    variant: "hover",
    name: "Place Holder Card",
    image:placeholder,
    subtitle: "",
    description: "This card is a placeholder for future professional work",
    tech:"",
    repo: "",
    deployed: "",
    deploy_button_label: ""
  },
  {
    id: "2",
    variant: "hover",
    name: "Place Holder Card",
    image:placeholder,
    subtitle: "",
    description: "This card is a placeholder for future professional work",
    tech:"",
    repo: "",
    deployed: "",
    deploy_button_label: ""
  },
  {
    id: "3",
    variant: "hover",
    name: "Place Holder Card",
    image:placeholder,
    subtitle: "",
    description: "This card is a placeholder for future professional work",
    tech:"",
    repo: "",
    deployed: "",
    deploy_button_label: ""
  }
 
];


function Professional() {
  return (
    <div style={{
      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '300vh'
    }}>

      <div className="textSoloHeader">
This is a placeholder page for me to add professional projects i have worked on to</div>
      

      <div className="container">
        <div className="row h-100">
        <div className="alignCards">
            {cards.map((card) => (
              <SoloFlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
      </div>)

}




      export default Professional;