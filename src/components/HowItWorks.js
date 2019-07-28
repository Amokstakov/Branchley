import React from 'react'
import faker from'faker'


import { Container, Col, Row, Carousel, Card, Button, CardDeck} from 'react-bootstrap'

const HowItWorks = () => {
	return (
		<Container fluid={true} style={{padding:'0 50px 0 50px'}}>
			<Row>
				<Col style={{backgroundColor:'#ebebeb',padding:'20px'}}>
					<Carousel indicators={false} controls={false}>
					  <Carousel.Item >
					  	<CardDeck>
						  <Card>
						    <Card.Img variant="top" src={faker.image.avatar()} style={{width:'80%',margin:'auto',padding:'5%'}}/>
						    <Card.Body style={{textAlign:'center'}}>
						      <Card.Title>User_Name_1</Card.Title>
						      <Card.Text style={{margin:'auto'}}>
						        This is a wider card with supporting text below as a natural lead-in to
						        additional content. This content is a little bit longer.
						      </Card.Text>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
						  </Card>
						  <Card>
						    <Card.Img variant="top" src={faker.image.avatar()} style={{width:'80%',margin:'auto',padding:'5%'}} />
						    <Card.Body style={{textAlign:'center'}}>
						      <Card.Title>User_Name_2</Card.Title>
						      <Card.Text>
						        This card has supporting text below as a natural lead-in to additional
						        content.{' '}
						      </Card.Text>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
						  </Card>
						  <Card>
						    <Card.Img variant="top" src={faker.image.avatar()} style={{width:'80%',margin:'auto',padding:'5%'}}/>
						    <Card.Body style={{textAlign:'center'}}>
						      <Card.Title>User_Name_3</Card.Title>
						      <Card.Text>
						        This is a wider card with supporting text below as a natural lead-in to
						        additional content. This card has even longer content than the first to
						        show that equal height action.
						      </Card.Text>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
						  </Card>
						</CardDeck>
					  </Carousel.Item>
					  <Carousel.Item >
					  	<CardDeck>
						  <Card>
						    <Card.Img variant="top" src={faker.image.avatar()} style={{width:'80%',margin:'auto',padding:'5%'}}/>
						    <Card.Body style={{textAlign:'center'}}>
						      <Card.Title>User_Name_4</Card.Title>
						      <Card.Text>
						        This is a wider card with supporting text below as a natural lead-in to
						        additional content. This content is a little bit longer.
						      </Card.Text>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
						  </Card>
						  <Card>
						    <Card.Img variant="top" src={faker.image.avatar()}  style={{width:'80%',margin:'auto',padding:'5%'}}/>
						    <Card.Body style={{textAlign:'center'}}>
						      <Card.Title>User_Name_5</Card.Title>
						      <Card.Text>
						        This card has supporting text below as a natural lead-in to additional
						        content.{' '}
						      </Card.Text>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
						  </Card>
						  <Card>
						    <Card.Img variant="top" src={faker.image.avatar()} style={{width:'80%',margin:'auto',padding:'5%'}}/>
						    <Card.Body style={{textAlign:'center'}}>
						      <Card.Title>User_Name_6</Card.Title>
						      <Card.Text>
						        This is a wider card with supporting text below as a natural lead-in to
						        additional content. This card has even longer content than the first to
						        show that equal height action.
						      </Card.Text>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
						  </Card>
						</CardDeck>
					  </Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	)
}

export default HowItWorks