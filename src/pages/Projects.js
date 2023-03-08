import React from "react";
import { Link, } from "react-router-dom";
import FlipCard from "../components/projectCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/projectCard.scss";


const cards = [
  {
    id: "1",
    variant: "hover",
    title: "Personal      Web Development Projects",
    front: "",
    back: "Click the link below to learn more about Web Applications I have Created Through My Learning",
    address: "'/Personal'",
    linkTitle: "Personal Development Projects"
  },
  {
    id: "2",
    variant: "focus",
    title: "Professional Web Development Work",
    front: "",
    back: "Click the link below to learn more Web Applications I have Created For Professional Projects",
    address: "'/Professional'",
    linkTitle: "Professional Development Projects"
  },
  {
    id: "3",
    variant: "click",
    title: "Voluntary Web Development Projects",
    front: "",
    back: "Click the link below to learn more Web Applications I have Created For Non Profit Groups",
    address: "'/Voluntary'",
    linkTitle: "Voluntary Development Projects"
  }
];


function Projects() {
  return (
    <div style={{
      backgroundImage: `url("../images/homeBackground.jpg")`,

      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      height: '120vh'
    }}>

      <h3>To Review Web Development Projects I have been involved select from the following</h3>
      

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