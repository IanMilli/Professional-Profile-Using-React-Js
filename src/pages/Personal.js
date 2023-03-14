import React from "react";
import PersonalFlipCard from "../components/PersonalCards.jsx";
import homePic from "../assets/images/homePage.jpg";

import ingrediantFyHP from '../assets/images/project screenshots/ingrediantfyHP.png';
import ingrediantFy from '../assets/images/project screenshots/ingrediantFy.png';
import placeholder from '../assets/images/project screenshots/PlaceHolder.png';

import advancedRPG from '../assets/images/project screenshots/advancedRPG.png';
import basicRPG from '../assets/images/project screenshots/advancedRPG.png';
import dailyPlanner from '../assets/images/project screenshots/dailyPlanner.png';
import readme from '../assets/images/project screenshots/readme.gif';
import revisionCards from '../assets/images/project screenshots/revision cards front page.png';
import weather from '../assets/images/project screenshots/weather homepage - london.png';


import "bootstrap/dist/css/bootstrap.min.css";
import "../components/scss/PersonalCard.scss";


const cards = [
  {
    id: "1",
    variant: "hover",
    title: "Solo Authored Technical Skill Development Projects",
    front: "",
    back: "Click the link below to learn more about Web Applications I have Created Myself",
    address: "/Projects/Personal/Solo",
    linkTitle: "Solo Authored Projects",
    carousel1: advancedRPG,
    carousel2: revisionCards,
    carousel3: weather
  },
  {
    id: "2",
    variant: "hover",
    title: "Collaborated Technical Skill Development Projects",
    front: "",
    back: "Click the link below to learn more Web Applications I have Created In Collaboration With Others",
    address: "/Projects/Personal/Collaboration",
    linkTitle: "Collaborated on Projects",
    carousel1: ingrediantFyHP,
    carousel2: placeholder,
    carousel3: placeholder
  },

];


function Personal() {
  return (
    <div style={{
      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '180vh'
    }}>
     
        <div className="textProjectsHeader">To Review the Web Design Projects I have completed in the development of my technical skills </div>
        <div className="textProjectsHeader"> select from the following: </div>


        <div className="container">
          <div className="row h-100">
            <div class="col d-flex flex-column flex-md-row justify-content-around ">
              {cards.map((card) => (
                <PersonalFlipCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
     
    </div>)

}




export default Personal;