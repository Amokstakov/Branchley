import React from 'react';

import './App.css';

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Subjects from './components/Subjects'
import AboutUs from './components/AboutUs'
import MidPage1 from './components/MidPage_1'
import HowItWorks from './components/HowItWorks'
import RequestForm from './components/RequestForm'
import Footer from './components/Footer'

import {Router, Route} from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div className="Full_Back" id="tag2">
        <div className="BackImg">
          <Header/>
          <SearchBar />
        </div>
        <Subjects/>
        <AboutUs />
        <MidPage1 />
        <HowItWorks />
        {/*<RequestForm />*/}
        <Footer />
      </div>
    )
  }
}

export default App;

