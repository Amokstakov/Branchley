import React from 'react'

import '../css/AboutUs.css'

import { Container, Row, Col } from 'react-bootstrap';


function AboutUs() {
    return (
        <Container fluid={true} style={{padding: '64px 50px 0 50px'}}>
            <Row>
                <Col style={{backgroundColor:'white'}}>
                    <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                        <i className="big circular info icon" style={{backgroundColor:'#007bff'}}></i>
                    </div>
                </Col>
            </Row>
            <Row style={{borderBottom:'2px solid #ebebeb'}}>
                <Col style={{backgroundColor:'white'}}>
                    <div className="aboutUs">
                        <h1>About Branchley</h1>
                        <p>Branchley is an association of tutors working to change how we learn.</p>
                         <p>Under guidance of tutors who have excelled beyond just academics, we strive to impart students 
                             with the habits, creativity and confidence for success.</p>
                        <p>Branch out your learning with us!
                            <i className="smile outline icon"></i>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs

