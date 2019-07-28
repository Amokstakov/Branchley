import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Subjects from './components/Subjects'
import MidPage1 from './components/MidPage_1'
import HowItWorks from './components/HowItWorks'
import ProcessWorks from './components/ProcessWorks'
import GeoDisp from './components/GeoDisp'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class App extends React.Component {

  state = {lat: null, err : ''}

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({ lat : position.coords.latitude})
        },
        (err) => {
          this.setState({err : err.message})
        }
      )
  }

  componentDidUpdate() {

  }

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
        <ProcessWorks/>
        <GeoDisp lat = {this.state.lat}/>
      </div>
    )
  }
}

export default App;

