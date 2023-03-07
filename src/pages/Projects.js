import React from "react";
import Button from 'react-bootstrap/Button';

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
     <Button variant="primary" href='./Professional'>Professional Web Development Projects</Button>{' '}
     <Button variant="secondary" href='./Voluntary'>Voluntary Web Development Projects</Button>{' '}
     <Button variant="success"href='./Personal' >Personal Development Projects</Button>{' '}
    </div>)

}




export default Projects;