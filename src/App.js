import React from 'react';

import './App.css';

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Subjects from './components/Subjects'
import MidPage1 from './components/MidPage_1'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

class App extends React.Component {

  render() {
    return (
      <div className="Full_Back">
        <div className="BackImg">
          <Header/>
          <SearchBar />
        </div>
        <Subjects/>
        <MidPage1 />
        <HowItWorks/>
        <Footer />
      </div>
    )
  }
}

export default App;

