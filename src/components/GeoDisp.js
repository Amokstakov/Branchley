import React from 'react';

import {Row, Container, Col, Card} from 'react-bootstrap'

const GeoDisp = (props) => { 
	return(
		<div>
			<Container fluid={true} style={{padding: '64px 50px 0 50px'}}>

				<Row>
					<Col style={{backgroundColor:'white',paddingBottom:'20px'}}>
						<div style={{margin:'auto',textAlign:'center',marginTop:'-3%'}}>
							<i className="big circular globe icon" style={{backgroundColor:'#007bff'}}></i>
						</div>
					</Col>
				</Row>

				<Row>
					<Col style={{backgroundColor:'white'}}>
						<div>
							<h1 style={{textAlign:'center'}}>
								Utilize Branchley's GEO Search Feature
							</h1>
						</div>
					</Col>
				</Row>
				<Row >
					<Col style={{backgroundColor:'white',paddingBottom:'5%'}}>
						<div style={{margin:'auto',marginTop:'3%'}}>
							<h2>
								Your current location:
							</h2>
						</div>
						<div>
							{props.lat}
						</div>
					</Col>
				</Row>
				<Row >
					<Col style={{backgroundColor:'white',paddingBottom:'5%'}}>
						<div style={{margin:'auto'}}>
							<h2>
								Nearest tutor:
							</h2>
						</div>
						<div>
							{props.lat}
						</div>
					</Col>
				</Row>
			</Container>

		</div>
	)

}

export default GeoDisp;