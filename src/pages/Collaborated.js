import React from "react";
import SoloFlipCard from "../components/DisplayCard.jsx";
import homePic from "../assets/images/homePage.jpg";

import ingrediantFy from '../assets/images/project screenshots/ingrediantFy.png';
import placeholder from '../assets/images/project screenshots/PlaceHolder.png';

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/scss/DisplayCardCollab.scss";
import "../pages/css/solo.css";


const cards = [
  {
    id: "1",
    div:'a',
    variant: "hover",
    name: "InGrediantFy App",
    image:ingrediantFy,
    subtitle: "",
    description: "This project is to to demonstrate the ability to collaborate to produce a website that incorporates the use of two unique API.",
    tech:"HTML, Bootstrap 5.3, CSS, Flexbox, Node Js (creation of readme), JavaScript, API",
    repo: "https://github.com/IanMilli/IngrediantFy",
    deployed: "https://ianmilli.github.io/IngrediantFy/",
    deploy_button_label: "Deployed Application"
  },
  {
    id: "2",
    div:'b',
    variant: "hover",
    name: "Project To Be Completed",
    image: placeholder,
    subtitle: "",
    description: "This is a placeholder for my next collaborated skills development project",
    tech: " ",
    repo: "",
    deployed: "",
    deploy_button_label: "PlaceHolder"
  },
  
 
];


function Collaborated() {
  return (
    <div style={{
      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '300vh'
    }}>

      <div className="textSoloHeader">
To Review the technical skills web development projects I have collaborated on, please review below:</div>
      

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




      export default Collaborated;