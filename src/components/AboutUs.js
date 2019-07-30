import React from 'react'

import '../css/AboutUs.css'
import { Container, Row } from 'react-bootstrap';

function AboutUs() {
    return (
        <Container fluid={true}>
            <div className="aboutUs">
                <h1>About Branchley</h1>
                <p>Branchley is an association of tutors working to change how we learn.</p>
                 <p>Under guidance of tutors who have excelled beyond just academics, we strive to impart students 
                     with the habits, creativity and confidence for success.</p>
                <p>Branch out your learning with us!
                    <i className="smile outline icon"></i>
                </p>
            </div>
        </Container>
    )
}

export default AboutUs