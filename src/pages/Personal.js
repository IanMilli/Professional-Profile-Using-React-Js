import React from "react";
import Button from 'react-bootstrap/Button';
import FlipCard from "../components/projectCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/projectCard.scss";


const cards = [
  {
    id: "1",
    variant: "hover",
    title: "Personal Development Projects",
    front: "",
    back: "Click the link below to learn more about Personal Developments",
    address: "'/Personal'",
    linkTitle: "Personal Development Projects"
  },
  {
    id: "2",
    variant: "focus",
    front: "Click",
    back: "Back"
  },
  {
    id: "3",
    variant: "click",
    front: "Focus",
    back: "Back"
  }
];


function Personal() {
    return (
        <div style={{
            backgroundImage: `url("../images/homeBackground.jpg")`,

            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 'auto',
            height: '120vh'
        }}>

            <h3>Use the following buttons to learn more about personal development projects i have been involved in</h3>
            <h4>group collaborated personal development projects</h4>
            <Button variant="primary">IngrediantFy Application</Button>{' '}
            <Button variant="primary">Collaborated Project to yet be defined placeholder</Button>{' '}

            <h4>solo authored personal development projects</h4>

            <div className="container">
      <div className="row h-100">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
        </div >)
}






export default Personal;