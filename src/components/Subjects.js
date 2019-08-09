import React from 'react';
import '../css/Subjects.css';

import {Container,Row,Col} from 'react-bootstrap'

const Subjects = () => {
	return (
		<Container fluid={true} style={{padding: '0 50px 0 50px',marginTop:'-4%'}}>
			<div id="tag">
				<Row className="testest">
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
								<i className="big plus icon"></i>
							</div>
							<div>
								<h3>Math</h3>
								Beginner, Intermediate, University
							</div>
						</div>
					</Col>
					<Col style={{backgroundColor:'white',border:'2px solid #ebebeb'}} className="SubjectCol">
						<div style={{width:'100%'}}>
							<div style={{float:'left',marginRight:'16px'}}>
								<i className="big chess rook icon"></i>
							</div>
							<div>
								<h3>Science</h3>
								Physics, Chemistry, Biology
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	)
}

export default Subjects;