import React from 'react'
import '../css/HowItWorks.css'

import pic1 from '../imgs/Sasha.jpg'
import pic2 from '../imgs/Rahul.jpg'
import pic3 from '../imgs/Jo.jpg'	

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
				<div className="HIWTitle">
					Meet just some of the great  
					tutors Branchley offers
				</div>
			</Row>
			<Container style={{backgroundColor:'white'}}>
				<Row style={{textAlign:'center',marginTop:'5%',marginBottom:'5%',paddingTop:'3%'}}>
					<Col xs={6} md={4}>
	      				<Image src={pic1} roundedCircle  />
	    			</Col>
	    			<Col xs={6} md={4}>
	      				<Image src={pic2} roundedCircle  />
	    			</Col>
	    			<Col xs={6} md={4}>
	      				<Image src={pic3} roundedCircle  />
	    			</Col>
				</Row>
				<Row style={{textAlign:'center'}}>
					<Col style={{backgroundColor:'white',border:'2px solid #ebebeb',height:'100%'}} className="SubjectCol">
						<div style={{width:'100%',overflow:'hidden',padding:'5%'}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>
								<h2>Alex Moks</h2>
								BEng and MSc in Artificial Intelligence
							</div>
							<div style={{paddingTop:'2%'}}>
								<div>
									<i className="big pencil icon" style={{float:'left'}}></i>
								</div>
								<div>
									All level S.T.E.M Subjects, Languages, Programming
								</div>
							</div>
						</div>
					</Col>
					<Col style={{backgroundColor:'white',border:'2px solid #ebebeb',height:'100%'}} className="SubjectCol">
						<div style={{width:'100%',overflow:'hidden',padding:'5%'}}>
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
					<Col style={{backgroundColor:'white',border:'2px solid #ebebeb',height:'100%'}} className="SubjectCol">
						<div style={{width:'100%',overflow:'hidden',padding:'5%'}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>
								<h2>Josef Asfaw</h2>
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
				<Row style={{textAlign:'center',marginTop:'5%',marginBottom:'5%',paddingTop:'3%'}}>
					<Col xs={6} md={4}>
	      				<Image src={pic1} roundedCircle  />
	    			</Col>
	    			<Col xs={6} md={4}>
	      				<Image src={pic2} roundedCircle  />
	    			</Col>
	    			<Col xs={6} md={4}>
	      				<Image src={pic3} roundedCircle  />
	    			</Col>
				</Row>
				<Row style={{textAlign:'center'}}>
					<Col style={{backgroundColor:'white',border:'2px solid #ebebeb',height:'100%'}} className="SubjectCol">
						<div style={{width:'100%',overflow:'hidden',padding:'5%'}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>
								<h2>Alex Moks</h2>
								BEng and MSc in Artificial Intelligence
							</div>
							<div style={{paddingTop:'2%'}}>
								<div>
									<i className="big pencil icon" style={{float:'left'}}></i>
								</div>
								<div>
									All level S.T.E.M Subjects, Languages, Programming
								</div>
							</div>
						</div>
					</Col>
					<Col style={{backgroundColor:'white',border:'2px solid #ebebeb',height:'100%'}} className="SubjectCol">
						<div style={{width:'100%',overflow:'hidden',padding:'5%'}}>
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
					<Col style={{backgroundColor:'white',border:'2px solid #ebebeb',height:'100%'}} className="SubjectCol">
						<div style={{width:'100%',overflow:'hidden',padding:'5%'}}>
							<div>
								<i className="big book icon" style={{float:'left'}}></i>
							</div>
							<div>
								<h2>Josef Asfaw</h2>
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
			</Container>
		</div>

	)
}

export default HowItWorks
