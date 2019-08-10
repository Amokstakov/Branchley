import React from 'react'
import '../css/HowItWorks.css'

import pic1 from '../imgs/Sasha.jpg'
import pic2 from '../imgs/Rahul.jpg'
import pic3 from '../imgs/Jo.jpg'	
import pic4 from '../imgs/Kyle.jpg'
import pic5 from '../imgs/Mila.jpg'
import pic6 from '../imgs/Hannah.jpg'	

import { Container, Col, Row, Carousel, Card, Button, CardDeck, Image} from 'react-bootstrap'

const HowItWorks = () => {
	return (
		<div id="#tag1">
			<Row>
				<Col style={{backgroundColor:'#ebebeb'}}>
					<div className="HIWBackImg">
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={12}>
					<div className="HIWTitle">
						Meet just some of the great  
						tutors Branchley offers
					</div>
				</Col>
			</Row>
			<Container style={{backgroundColor:'white'}}>
				<Row style={{textAlign:'center',marginTop:'5%',marginBottom:'5%',paddingTop:'3%'}}>
					<Col xs={12} md={4}>
	      				<Image fluid={true} src={pic1} roundedCircle  />
	      				<div style={{width:'100%',overflow:'hidden',padding:'5%',border:'2px solid #ebebeb'}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>
								<h2>Alex Moks</h2>
								BEng and MSc in A.I
							</div>
							<div style={{paddingTop:'2%'}}>
								<div>
									<i className="big pencil icon" style={{float:'left'}}></i>
								</div>
								<div>
									All level S.T.E.M Subjects and Languages
								</div>
							</div>
						</div>
	    			</Col>
	    			<Col xs={12} md={4}>
	      				<Image fluid={true} src={pic2} roundedCircle  />
	      				<div style={{width:'100%',overflow:'hidden',padding:'5%',border:'2px solid #ebebeb'	}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>	
								<h2>Rahul Eswar</h2>
								BEng and MSc in Electrical Engineering
							</div>
							<div style={{paddingTop:'2%'}}>
								<div>
									<i className="big pencil icon" style={{float:'left'}}></i>
								</div>
								<div>
									All level S.T.E.M Subjects and Languages
								</div>
							</div>
						</div>
	    			</Col>
	    			<Col xs={12} md={4}>
	      				<Image fluid={true} src={pic3} roundedCircle  />
	      				<div style={{width:'100%',overflow:'hidden',padding:'5%',border:'2px solid #ebebeb'}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>
								<h2>Joseph Asfaw</h2>
								BEng and Manufacturing Engineer
							</div>
							<div style={{paddingTop:'2%'}}>
								<div>
									<i className="big pencil icon" style={{float:'left'}}></i>
								</div>
								<div>
									All level S.T.E.M Subjects and Languages
								</div>
							</div>
						</div>
	    			</Col>
				</Row>
				<Row style={{textAlign:'center',marginTop:'5%',marginBottom:'5%',marginTop:'3%'}}>
					<Col xs={12} md={4}>
	      				<Image fluid={true} src={pic4} roundedCircle  />
	      				<div style={{width:'100%',overflow:'hidden',padding:'5%',border:'2px solid #ebebeb'}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>
								<h2>Kyle Mermer</h2>
								B.A in History
							</div>
							<div style={{paddingTop:'2%'}}>
								<div>
									<i className="big pencil icon" style={{float:'left'}}></i>
								</div>
								<div>
									Languages and Elementary Subjects
								</div>
							</div>
						</div>
	    			</Col>
	    			<Col xs={12} md={4}>
	      				<Image fluid={true} src={pic5} roundedCircle  />
	      				<div style={{width:'100%',overflow:'hidden',padding:'5%',border:'2px solid #ebebeb'	}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>	
								<h2>Mila Buradonski</h2>
								BSc in Chemistry
							</div>
							<div style={{paddingTop:'2%'}}>
								<div>
									<i className="big pencil icon" style={{float:'left'}}></i>
								</div>
								<div>
									All level S.T.E.M Subjects and Languages
								</div>
							</div>
						</div>
	    			</Col>
	    			<Col xs={12} md={4}>
	      				<Image fluid={true} src={pic6} roundedCircle  />
	      				<div style={{width:'100%',overflow:'hidden',padding:'5%',border:'2px solid #ebebeb'}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>
								<h2>Hannah Patel</h2>
								BA in Mathematics
							</div>
							<div style={{paddingTop:'2%'}}>
								<div>
									<i className="big pencil icon" style={{float:'left'}}></i>
								</div>
								<div>
									All level S.T.E.M Subjects and Languages
								</div>
							</div>
						</div>
	    			</Col>
				</Row>
			</Container>
		</div>

	)
}

export default HowItWorks
