import React from 'react'

import { Row, Col, Container, Card, CardDeck } from 'react-bootstrap'

const Pricing = () => {
    return(
        <Container fluid={true} style={{padding: "2% 50px"}} id="tag5">
            <Row style={{borderBottom:'2px solid #ebebeb'}}>
                <Col style={{backgroundColor:'white'}}>
                    <div className="aboutUs">
                        <h1>Pricing Plans</h1>
                        <p>Branchley has a variety of pricing plans. From standard hourly rate, to extended packages, we can find one that works for you!</p>
                    </div>
                </Col>
            </Row>
			<Row style={{padding:"2% 50px"}} >
                <CardDeck >
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#ECECEC', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Silver Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$34 / Hour</div>
                                <p>The classic hourly rate. This tier allows you to really gauge our services. Built for clients who do not want to commit to a longer term.</p>
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
                                <div style={{fontSize:'150%'}}>$155 / 5 Hours</div>
                                <p>Our Gold Tier package gives clients a better deal and a dedicated tutor. It is perfect for realizing the full impact our tutors can make in helping a student excel.</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">$31/HOUR </small>   
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#B2EBF9', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Diamond Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$280 / 10 Hours</div>
                                <p>Our Diamond Tier package is offered for building longer relationships. Those prepared to commit will benefit from more tailored lesson plans and thorough exam prep.</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">$28/HOUR</small>   
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Row>
            <Row style={{borderBottom:'2px solid #ebebeb',padding:"20px 50px"}}>
                <Col style={{backgroundColor:'white'}}>
                    <div className="aboutUs">
                        <h1>At Home Pricing Plans</h1>
                        <p>Now Introducing, tutoring services directly to your house!</p>
                        <div style={{margin:'auto',textAlign:'center',}}>
                            <i className="massive circular home icon" style={{backgroundColor:'#03dbfc', textAlign:'center'}}></i>
                        </div>
                        <p>No need to leave the comfort of your home! Our Branchley tutors will come to your location and make sure you are taken care of.</p>
                    </div>
                </Col>
            </Row>
			<Row style={{padding:"2% 50px"}}>
                <CardDeck >
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#ECECEC', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Silver Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$38 / Hour</div>
                                <p>The classic hourly rate. This tier allows you to really gauge our services. Built for clients who do not want to commit to a longer term.</p>
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
                                <div style={{fontSize:'150%'}}>$175 / 5 Hours</div>
                                <p>Our Gold Tier package gives clients a better deal and a dedicated tutor. It is perfect for realizing the full impact our tutors can make in helping a student excel.</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">$35/HOUR </small>   
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
                            <i className="huge circular certificate icon" style={{backgroundColor:'#B2EBF9', textAlign:'center'}}></i>
                        </div>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Diamond Tier</Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                <div style={{fontSize:'150%'}}>$320 / 10 Hours</div>
                                <p>Our Diamond Tier package is offered for building longer relationships. Those prepared to commit will benefit from more tailored lesson plans and thorough exam prep.</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">$32/HOUR</small>   
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    )
}

export default Pricing;