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
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        this.setState({
            [name] : value
        })


    }

    render() {
        return (
            <form className="requestForm">
                <h1 className="formTitle">Request a Lesson!</h1>
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
                            <option>**Please enter subject(s)**</option>
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
                            <option>**Please enter grade level**</option>
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
                        <input 
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email Address"
                        />
                    </label>

                    <label>
                        <input 
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            placeholder="Phone Number"
                        />
                    </label>

                    <label>
                        <textarea 
                            name="message"
                            value={this.state.message}
                            onChange={this.state.handleChange}
                            placeholder="(Optional) Tell us any other details you wish to include or just say hello :)"
                        />
                    </label>

                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        ) 
    }
}

export default RequestForm