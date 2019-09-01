import React, {Component} from 'react'

import logo from '../imgs/branchley-logo.png'

import '../css/Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="popularSubjects">
                    <h4>Popular Subjects Offered</h4>
                    <ul>
                        <li>Chemistry</li>
                        <li>Calculus</li>
                        <li>Advanced Functions</li>
                        <li>Physics</li>
                        <li>General Science</li>
                        <li>Mechanics</li>
                    </ul>
                </div>

                <div className="footerLogo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                </div>

                <div className="contactSection">
                    <h4>Questions for Us?</h4>
                    <p>Email: branchley@gmail.com</p>
                    <p>Phone: 519-760-6272</p>
                    <p>Main Office: 55 Yarmouth Street, Guelph ON N1H 4G2</p>
                </div>
            </footer>
        )
    }
}

export default Footer