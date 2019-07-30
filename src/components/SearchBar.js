import React from 'react';
import '../css/SearchBar.css';

import {Form, Button, InputGroup,FormControl} from 'react-bootstrap'

const SearchBar = () => {
	return(
		<div className="SearchBox flipInX">
			<h1>
				<span className="m">
					Tutors Branching Out
				</span>
				<br />
					To Find People like You
			</h1>

			{/*<InputGroup className="mb-3">
    			<FormControl
    				style={{padding:'7%',fontWeight:'bold'}}
      				placeholder="Search a Subject you Need"
      				aria-label="Recipient's username"
      				aria-describedby="basic-addon2"
    			/>
    			<InputGroup.Append>
      				<Button 
      					style={{fontWeight:'bold'}}
      					variant="primary">Find a Tutor
      				</Button>
    			</InputGroup.Append>
			</InputGroup>*/}
		</div>
	)
}

export default SearchBar;

