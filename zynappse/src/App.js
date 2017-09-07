import React, { Component } from 'react';
import './App.css';
import './cards.css';
import { Row } from 'react-bootstrap';
import Header from './header.js';
import Infographics from './infographics.js';
import IntroBanner from './introbanner.js';
import Skills from './skills.js';
import About from './about.js';
import Contact from './contact.js';
// import {SectionsContainer, Section} from 'react-fullpage';
class App extends Component {
  render() {
    return (
    <Row id="fullpage">
      <Header />
        <IntroBanner />
        <Infographics />
        <div className="margin-section"></div>
        <div className="about " style={{  color: "white"}}  id="about" >
             <About />
        </div>
        <Skills />
        <div className="margin-section"></div>
        <Contact />
    </Row>
    );
  }
}

export default App;


			// <div className="cd-3d-right-side"></div>
			// <div className="cd-3d-left-side"></div>
			// <div className="cd-3d-bottom-side"></div>
