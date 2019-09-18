import React from 'react'
import '../css/MidPage1.css';
import ConnectedImg from '../imgs/Connected.png'

import {Container, Row, Col, Button} from 'react-bootstrap'

import { HashLink as Link } from 'react-router-hash-link';

const MidPage1 = () => {
	return (
		<Container fluid={true} style={{padding: '64px 50px 0 50px'}} id="tag4">
			<Row>
				<Col style={{backgroundColor:'white',paddingBottom:'20px'}}>
					<div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
						<i className="big circular users icon" style={{backgroundColor:'#007bff'}}></i>
					</div>
				</Col>
			</Row>
			<Row style={{borderBottom:'2px solid #ebebeb'}}>
				<Col style={{backgroundColor:'white'}}>
					<div>
						<h1 style={{textAlign:'center'}}>
							We want you to feel together with your tutor 
						</h1>
					</div>
					<div style={{textAlign:'center'}}>
						Feel comfortable and natural when you meet regular people like you - who teach
					</div>
					<div style={{padding:'8% 2% 0 2%'}}>
						<img src={ConnectedImg} alt="something" className="MidPageBackImg"/>
					</div>
				</Col>
			</Row>
			<Row style={{borderBottom:'2px solid #ebebeb'}}>
				<Col xs={12} md={3} style={{backgroundColor:'white'}}>
					<div className="valueCard">
						<div>
							<i className="big circular blue certificate icon"></i>
						</div>
						<div>
							<h4>Talented Tutors</h4>
						</div>
						<div>
							Find expert and certified tutors from the Branchley ecosystem
						</div>
					</div>
				</Col>
				<Col xs={12} md={3} style={{backgroundColor:'white'}}>
					<div className="valueCard">
						<div>
							<i className="big circular blue shield alternate icon"></i>
						</div>
						<div>
							<h4>Verify and Review</h4>
						</div>
						<div>
							Carefully verify and review each tutor to see if they fit your needs
						</div>
					</div>
				</Col>
				<Col xs={12} md={3} style={{backgroundColor:'white'}}>
					<div className="valueCard">
						<div>
							<i className="big circular blue globe icon"></i>
						</div>
						<div>
							<h4>Worldwide Connections</h4>
						</div>
						<div>
							We focus on connecting tutors with passionate and talented individuals
						</div>	
					</div>
				</Col>
				<Col xs={12} md={3} style={{backgroundColor:'white'}}>
					<div className="valueCard">
						<div>
							<i className="big circular blue dollar sign icon"></i>
						</div>
						<div>
							<h4>Affordable Prices</h4>
						</div>
						<div>
							Branchley's payment system depends on expert service, and experience
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col style={{backgroundColor:'white',paddingBottom:'20px'}}>
					<div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
						<i className="big circular calendar outline icon" style={{backgroundColor:'#007bff'}}></i>
					</div>
				</Col>
			</Row>
			<Row>
				<Col style={{backgroundColor:'white'}}>
					<div>
						<h1 style={{textAlign:'center'}}>
							Flexible schedules to fit your time
						</h1>
					</div>
					<div style={{textAlign:'center'}}>
						Prepare to find the time and skills you need on subjects you deserve
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={6} style={{backgroundColor:'white',padding:'5% 0 5% 0'}}>
					<div style={{width:'100%',padding:'0 10% 0 10%'}}>
						<div style={{float:'left'}}>
							<i className="big circular blue comment icon"></i>
						</div>
						<div style={{flex:'1 1 auto',marginLeft:'20%'}}>
							<div style={{marginBotton:'6px',color:'#384047',fontSize:'18px',lineHeight:'1.3'}}>
								Share your experience
							</div>
							<div >
								Leave a comment after your session and leave feedback
							</div>
						</div>
					</div>
				</Col>
				<Col xs={12} md={6} style={{backgroundColor:'white',padding:'5% 0 5% 0'}}>
					<div style={{width:'100%', padding:'0 10% 0 10%'}}>
						<div style={{float:'left'}}>
							<i className="big circular blue book icon"></i>
						</div>
						<div style={{flex:'1 1 auto',marginLeft:'20%'}}>
							<div style={{marginBotton:'6px',color:'#384047',fontSize:'18px',lineHeight:'1.3'}}>
								Modern teaching tactics with sources
							</div>
							<div>
								All our tutors will provide you with your resources from their teachings
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<Row style={{borderBottom:'2px solid #ebebeb'}}>
				<Col xs={12} md={6} style={{backgroundColor:'white',padding:'5% 0 5% 0'}}>
					<div style={{width:'100%', padding:'0 10% 0 10%'}}>
						<div style={{float:'left'}}>
							<i className="big circular blue envelope icon"></i>
						</div>
						<div style={{flex:'1 1 auto',marginLeft:'20%'}}>
							<div style={{marginBotton:'6px',color:'#384047',fontSize:'18px',lineHeight:'1.3'}}>
								Keep communication
							</div>
							<div>
								Email your tutor if you have questions, concerns or changes
							</div>
						</div>
					</div>
				</Col>
				<Col xs={12} md={6} style={{backgroundColor:'white',padding:'5% 0 5% 0'}}>
					<div style={{width:'100%', padding:'0 10% 0 10%'}}>
						<div style={{float:'left'}}>
							<i className="big circular blue lightbulb icon"></i>
						</div>
						<div style={{flex:'1 1 auto',marginLeft:'20%'}}>
							<div style={{marginBotton:'6px',color:'#384047',fontSize:'18px',lineHeight:'1.3'}}>
								Keep your ideas sharp
							</div>
							<div style={{flex:'1 1 auto',display:'block'}}>
								Bounce your ideas and see if we can help sharpen them
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col style={{backgroundColor:'white',paddingBottom:'20px'}}>
					<div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
						<i className="big circular clock icon" style={{backgroundColor:'#007bff'}}></i>
					</div>
				</Col>
			</Row>

			{/*
			<Row>
				<Col style={{backgroundColor:'white'}}>
					<div style={{textAlign:'center',padding:'3%'}}>
						<div>
							<h1>
								Request a local tutor
							</h1>
						</div>
						<div>
							Find a suitable skilled tutor that fits your needs
						</div>
						<div style={{paddingTop:'2%'}}>
							<Button variant="primary" size='lg' onClick={() => window.location.href='/RequestForm#tag3'}>
								<Link className="nav-link" to="/RequestForm#tag3">Post Request</Link>
							</Button>
						</div>
					</div>
				</Col>
			</Row>
			*/}

			<Row>
				<Col >
					<div style={{textAlign:'center',padding:'7% 0 4% 0'}}>
						<div>
							<h2>
								Want to Become a Tutor?
							</h2>
						</div>
						<div>
							Branchley tutors help people in their local areas. Sign up to join a growing community
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default MidPage1;
