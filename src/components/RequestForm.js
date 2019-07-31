import React, {Component} from "react"

class RequestForm extends Component {
    constructor() {
        super()
        this.state = {
            name : "",
            subject : "",
            grade : "",
            email : "",
            phone : "",
            contactPreference : ""
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
                        <option></option>
                        <option>Mathematics</option>
                        <option>Chemistry</option>
                        <option>Physics</option>
                        <option>Science</option>
                        <option>Programming</option>
                        <option>English</option>
                        <option>Engineering Courses</option>
                        <option>Resume/Career Services</option>
                        <option>Other</option>
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
                        <option></option>
                        <option>Primary (1-8)</option>
                        <option>Secondary (9-12)</option>
                        <option>Post Secondary (Univ./College)</option>
                    </select>
                </label>

                <label>
                    Contact Preference:
                    <label>
                        <input
                            type="radio"
                            name="contactPreference"
                            value="isPhoneContact"
                            checked={this.state.contactPreference === "isPhoneContact"}
                            onChange={this.handleChange}
                        /> By Phone?
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="contactPreference"
                            value="isPhoneContact"
                            checked={this.state.contactPreference === "isPhoneContact"}
                            onChange={this.handleChange}
                        /> Or By Email?
                    </label>
                </label>

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

                <textarea 
                    name="message"
                />
            </form>
        ) 
    }
}

export default RequestForm