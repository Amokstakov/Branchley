import React, {Component} from "react"

import '../css/RequestForm.css'

class RequestForm extends Component {
    constructor() {
        super()
        this.state = {
            name : "",
            subject : "",
            grade : "",
            email : "",
            phone : "",
            contactPreference : "",
            message : ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        const {name, subject, grade, email, phone, contactPreference, message} = this.state
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form className="requestForm" action="requestHandler.php" onSubmit={this.handleSubmit}>
                <div className="formTitle">
                    <h1>Get Stared with Branchley!</h1>
                    <p>Online lesson request form</p>
                </div>
                <div className="leftSide">
                    <label>
                        Name:
                        <input 
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </label>

                    <label>
                        Subject: 
                        <select 
                            name="subject"
                            value={this.state.subject}
                            onChange={this.handleChange}
                            required
                        >
                            <option>**Please choose subject(s)**</option>
                            <option>Mathematics</option>
                            <option>Chemistry</option>
                            <option>Physics</option>
                            <option>Science</option>
                            <option>Programming</option>
                            <option>English</option>
                            <option>Engineering Courses</option>
                            <option>Resume/Career Services</option>
                            <option>Multiple</option>
                        </select>
                    </label>

                    <label>
                        Grade/Level:
                        <select
                            name="grade"
                            value={this.state.grade}
                            onChange={this.handleChange}
                            required
                        >
                            <option>**Please choose grade level**</option>
                            <option>Primary (1-8)</option>
                            <option>Secondary (9-12)</option>
                            <option>Post Secondary (Univ./College)</option>
                        </select>
                    </label>

                
                    <label>
                        Contact Preference:
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="contactPreference"
                                value="isPhoneContact"
                                checked={this.state.contactPreference === "isPhoneContact"}
                                onChange={this.handleChange}
                                required
                            /> By Phone?
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="contactPreference"
                                value="isEmailContact"
                                checked={this.state.contactPreference === "isEmailContact"}
                                onChange={this.handleChange}
                            /> Or By Email?
                        </label>
                    </label>
                </div>

                <div className="rightSide">
                    <label>
                        Email Address:
                        <input 
                            id="emailField"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email Address"
                            required = {this.state.contactPreference === "isEmailContact"}
                        />
                    </label>

                    <label>
                        Phone Number:
                        <input 
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            placeholder="Phone Number"
                            required = {this.state.contactPreference === "isPhoneContact"}
                        />
                    </label>

                    <label>
                        <textarea 
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            placeholder="Any other details?"
                        />
                    </label>

                    <button className="submitBtn" type="submit"><span>Submit</span></button>
                </div>
            </form>
        ) 
    }
}

export default RequestForm