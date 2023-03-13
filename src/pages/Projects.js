import React from "react";
import FlipCard from "../components/ProjectCard.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/ProjectCard.scss";
import homePic from "../assets/images/homePage.jpg";
import '../pages/css/projects.css';
import { Container } from "react-bootstrap";
import card1 from '../assets/images/cards/projectCard1.png'
import card2 from '../assets/images/cards/projectCards2.png'
import card3 from '../assets/images/cards/projectCard3.png'
const cards = [
  {
    id: "1",
    variant: "hover",
    title: "Personal      Web Development Projects",
    front: "",
    back: "Click the link below to learn more about Web Applications I have Created Through My Learning",
    address: "/Projects/Personal",
    linkTitle: "Personal Development Projects",
    image:card1
  },
  {
    id: "2",
    variant: "hover",
    title: "Professional Web Development Work",
    front: "",
    back: "Click the link below to learn more Web Applications I have Created For Professional Projects",
    address: "/Professional",
    linkTitle: "Professional Development Projects",
    image:{card2}
  },
  {
    id: "3",
    variant: "hover",
    title: "Voluntary Web Development Projects",
    front: "",
    back: "Click the link below to learn more Web Applications I have Created For Non Profit Groups",
    address: "'/Voluntary'",
    linkTitle: "Voluntary Development Projects",
    image:{card3}
  }
];


function Projects() {
  return (
    <div style={{
      backgroundImage: `url(${homePic})`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '140vh'
    }}>
     
        <div className="textProjectsHeader">To Review Web Design Projects I have been involved select from the following</div>


        <div className="container">
          <div className="row h-100">
            <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
              {cards.map((card) => (
                <FlipCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
     
    </div>)

}




export default Projects;