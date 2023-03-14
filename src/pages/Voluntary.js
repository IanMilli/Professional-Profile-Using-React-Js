import React from "react";
import SoloFlipCard from "../components/DisplayCard.jsx";
import homePic from "../assets/images/homePage.jpg";

import placeholder from '../assets/images/project screenshots/PlaceHolder.png';
import bb from '../assets/images/about - workCarousel/bb.jpg';

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/scss/DisplayCard.scss";
import "../pages/css/solo.css";


const cards = [
  {
    id: "1",
    variant: "hover",
    name: "The Boys' Brigade North West District Training and Activity Centre",
    image:bb,
    subtitle: "",
    description: "This card is a placeholder for a landing website that will connect to a coauthored unique booking system for the centre",
    tech:"",
    repo: "https://github.com/IanMilli/Branded-Website-for-Non-Profit-Charity",
    deployed: "",
    deploy_button_label: "under development"
  },
  {
    id: "2",
    variant: "hover",
    name: "Place Holder Card",
    image:placeholder,
    subtitle: "",
    description: "This card is a placeholder for future voluntary work",
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
    description: "This card is a placeholder for future voluntary work",
    tech:"",
    repo: "",
    deployed: "",
    deploy_button_label: ""
  }
 
];


function Voluntary() {
  return (
    <div style={{
      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '300vh'
    }}>

      <div className="textSoloHeader">
This is a selection of web design work I have generated on a voluntary basis for non profit organisations</div>
      

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




      export default Voluntary;