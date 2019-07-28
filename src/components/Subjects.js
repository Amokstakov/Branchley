import React from 'react';
import '../css/Subjects.css';

import {Container,Row,Col} from 'react-bootstrap'

const Subjects = () => {
	return (
		<Container fluid={true} style={{padding: '0 50px 0 50px',marginTop:'-4%'}}>
			<Row>
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big language icon"></i>
						</div>
						<div>
							<h3>Language Tutors</h3>
							English & French
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big music icon"></i>
						</div>
						<div>
							<h3>Music Tutors</h3>
							Guitar and Beats
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big chart line icon"></i>
						</div>
						<div>
							<h3>Business Intelligence</h3>
							Power BI and VBA
						</div>
					</div>
				</Col>
			</Row>
			<Row >
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big code icon"></i>
						</div>
						<div>
							<h3>Programming</h3>
							Python, React
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big file alternate icon"></i>
						</div>
						<div>
							<h3>Resume Building</h3>
							Latex, Filters
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big database icon"></i>
						</div>
						<div>
							<h3>Data Management</h3>
							SQL, PHP
						</div>
					</div>
				</Col>
			</Row>
			<Row >
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big heart outline icon"></i>
						</div>
						<div>
							<h3>Fitness Tutors</h3>
							Gym, Weight Lifitng
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big camera retro icon"></i>
						</div>
						<div>
							<h3>Photography Tutors</h3>
							Angles, Lenses
						</div>
					</div>
				</Col>
				<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
					<div style={{width:'100%'}}>
						<div style={{float:'left',marginRight:'16px'}}>
							<i className="big desktop icon"></i>
						</div>
						<div>
							<h3>Free Lancing</h3>
							Clients, Branding
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Subjects;