import React from 'react'
import { Row, Col, Container, Card, CardDeck } from 'react-bootstrap'

const Pricing = () => {
    return(
        <Container fluid={true} style={{padding: '64px 50px 0 50px'}} id="tag4">
            <Row style={{borderBottom:'2px solid #ebebeb'}}>
                <Col style={{backgroundColor:'white'}}>
                    <div className="aboutUs">
                        <h1>Pricing Plans</h1>
                        <p>Branchley has a variety of pricing plans. From standard hourly rate, to extended packages, we can find one that works for you!</p>
                    </div>
                </Col>
            </Row>
			<Row >
                <CardDeck >
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#ECECEC', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Silver Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$32 / Hour</div>
                                <p>The classic hourly rate. This tier allows you to really gauge our services, and for clients who do not want to commit to a longer term</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Regular Hours</small>   
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#FFD700', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Gold Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$145 / 5 Hours</div>
                                <p>Our Gold Tier package is perfect to build longer relationships. It is perfect for tackling longer and tougher subjects and preparing for exams </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">$29/HOUR </small>   
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#B2EBF9', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Diamond Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$260 / 10 Hours</div>
                                <p>Our Gold Tier package is perfect to build longer relationships. It is perfect for tackling longer and tougher subjects and preparing for exams </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">$26/HOUR</small>   
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Row>
            <Row style={{borderBottom:'2px solid #ebebeb'}}>
                <Col style={{backgroundColor:'white'}}>
                    <div className="aboutUs">
                        <h1>At Home Pricing Plans</h1>
                        <p>Now Introducing, tutoring services directly to your house!</p>
                        <div style={{margin:'auto',textAlign:'center',}}>
                            <i className="massive circular home icon" style={{backgroundColor:'#03dbfc', textAlign:'center'}}></i>
                        </div>
                        <p>Never leave the comofrt of your own home! Our Branchley tutors will come to your location and make sure our clients are comfortable learning</p>
                    </div>
                </Col>
            </Row>
			<Row >
                <CardDeck >
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#ECECEC', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Silver Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$36 / Hour</div>
                                <p>The classic hourly rate. This tier allows you to really gauge our services, and for clients who do not want to commit to a longer term</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Regular Hours</small>   
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#FFD700', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Gold Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$165 / 5 Hours</div>
                                <p>Our Gold Tier package is perfect to build longer relationships. It is perfect for tackling longer and tougher subjects and preparing for exams </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">$33/HOUR </small>   
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#B2EBF9', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Diamond Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$300 / 10 Hours</div>
                                <p>Our Gold Tier package is perfect to build longer relationships. It is perfect for tackling longer and tougher subjects and preparing for exams </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">$30/HOUR</small>   
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    )
}

export default Pricing;