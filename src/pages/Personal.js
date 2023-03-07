import React from "react";
import Button from 'react-bootstrap/Button';

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

            <Button variant="primary">Basic & Advanced Random Password Generators</Button>{' '}
            <Button variant="primary">Revision Cards Test Web Application</Button>{' '}
            <Button variant="primary">Daily Planner Web Apllication</Button>{' '}
            <Button variant="primary">Responsive Weather Dashboard With API</Button>{' '}
            <Button variant="primary">Professional ReadMe Generator</Button>{' '}
            <Button variant="primary">Personal Profile Web Projects</Button>{' '}

        </div >)
}






export default Personal;