import React from 'react';
import '../css/Header.css';
import logo from '../imgs/branchley-logo.png'

import {Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap'


import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';



const Header = () => {
	return(
		<Navbar collapseOnSelect expand="md" className="custom-nav-bg">
			<Container fluid={true}>
	    		<Navbar.Brand href="#home">
	    			<img src={logo} alt='logo'/>
					ranchley
	    		</Navbar.Brand>
	    		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	    		<Navbar.Collapse id="responsive-navbar-nav">
	    			<Nav className="mr-auto navItems">
	      				<Link className="nav-link" to="/App#tag2" style={{ color:'orange' }}>Home</Link>
	      				<Link className="nav-link" to="/Subjects#tag">About Us</Link>
	      				<Link className="nav-link" to="/HowItWorks#tag1">Our Tutors</Link>
						<Link className="nav-link" to="/MidPage_1#tag4">How It Works</Link>
						{/*<Link className="nav-link" to="/RequestForm#tag3">Lesson Request</Link>*/}
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