import React from 'react';
import faker from 'faker'
import StolenIMG1 from '../imgs/Stolen1.PNG'
import StolenIMG2 from '../imgs/Stolen2.PNG'

import {Container, Row, Col, Button} from 'react-bootstrap'

const ProcessWorks = () => {
	return (
		<Container fluid={true} style={{padding: '64px 50px 0 50px'}}>
			<Row>
				<Col style={{backgroundColor:'white',paddingBottom:'20px'}}>
					<div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
						<i className="big circular address card outline icon" style={{backgroundColor:'#007bff'}}></i>
					</div>
				</Col>
			</Row>
			<Row>
				<Col style={{backgroundColor:'white'}}>
					<div style={{textAlign:'center',padding:'3%'}}>
						<div>
							<h1>
								How Branchley Works
							</h1>
						</div>
						<div>
							Learn more than just academic subjects from experienced people
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col style={{backgroundColor:'white',padding:'5% 0 5% 0'}}>
					<div style={{width:'100%',padding:'0 10% 0 10%'}}>
						<div style={{float:'left',marginRight:'5%'}}>
							<i className="big circular blue arrow circular right icon"></i>
						</div>
						<div style={{flex:'1 1 auto',marginLeft:'20%'}}>
							<div style={{marginBotton:'6px',color:'#384047',fontSize:'18px',lineHeight:'1.3'}}>
								Find the perfect tutor
							</div>
							<div >
								Search by language, price, nationality, or availability
							</div>
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white'}}>
					<div>
						<img src={StolenIMG1} style={{height:'10%',width:'90%',marginTop:'5%'}}/>
					</div>
				</Col>
			</Row>
			<Row>
				<Col style={{backgroundColor:'white',padding:'5% 0 5% 0'}}>
					<div style={{width:'100%',padding:'0 10% 0 10%'}}>
						<div style={{float:'left',marginRight:'5%'}}>
							<i className="big circular blue arrow circular right icon"></i>
						</div>
						<div style={{flex:'1 1 auto',marginLeft:'20%'}}>
							<div style={{marginBotton:'6px',color:'#384047',fontSize:'18px',lineHeight:'1.3'}}>
								Geographically find tutors near you
							</div>
							<div >
								Automatically use your location to match with tutors near you
							</div>
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white'}}>
					<div>
						<img src={StolenIMG1} style={{height:'10%',width:'90%',marginTop:'5%'}}/>
					</div>
				</Col>
			</Row>
			<Row>
				<Col style={{backgroundColor:'white',padding:'5% 0 5% 0'}}>
					<div style={{width:'100%',padding:'0 10% 0 10%'}}>
						<div style={{float:'left',marginRight:'5%'}}>
							<i className="big circular blue arrow circular right icon"></i>
						</div>
						<div style={{flex:'1 1 auto',marginLeft:'20%'}}>
							<div style={{marginBotton:'6px',color:'#384047',fontSize:'18px',lineHeight:'1.3'}}>
								Schedule your lesson
							</div>
							<div >
								View your tutor's calendar and pick the perfect time for your busy schedule
							</div>
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white',paddingBottom:'3%'}}>
					<div>
						<img src={StolenIMG2} style={{height:'10%',width:'90%',marginTop:'5%'}}/>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ProcessWorks;


