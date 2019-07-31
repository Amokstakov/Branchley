import React from 'react';
import '../css/Header.css';
import logo from '../imgs/education.png'

import {Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
	return(
		<Navbar collapseOnSelect expand="md" className="custom-nav-bg">
			<Container fluid={true}>
	    		<Navbar.Brand href="#home">
	    			Branchley
	    			<img src={logo} alt='logo'/>
	    		</Navbar.Brand>
	    		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	    		<Navbar.Collapse id="responsive-navbar-nav">
	    			<Nav className="mr-auto navItems">
	      				<Nav.Link href="#">Home</Nav.Link>
	      				<Nav.Link href="#">About Us</Nav.Link>
	      				<Nav.Link href="#">Our Tutors</Nav.Link>
						<Nav.Link href="#">How It Works</Nav.Link>
						<Nav.Link href="#">Lesson Request</Nav.Link>
	    			</Nav>

	    			{/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        				<NavDropdown.Item href="#action/3.1">Shit</NavDropdown.Item>
        				<NavDropdown.Item href="#action/3.2">More Shit</NavDropdown.Item>
        				<NavDropdown.Item href="#action/3.3">Most Shit</NavDropdown.Item>
        				<NavDropdown.Divider />
        				<NavDropdown.Item href="#action/3.4">Separated Shit</NavDropdown.Item>
      				</NavDropdown>
	    			<Nav>
	    				<Nav.Link href="faq">
	    					<i className="question circle outline icon" style={{ marginRight:'30px',marginLeft:'30px'}}></i>
	    				</Nav.Link>
					    <Nav.Link href="#deets">
					    	<i className="sign in alternate icon" ></i>
					    	Log In
					    </Nav.Link>
					</Nav>*/}
	    		</Navbar.Collapse>
	    	</Container>
 		</Navbar>
	)
}

export default Header