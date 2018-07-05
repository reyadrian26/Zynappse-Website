import React, {Component} from 'react';
// import '../static/css/index.css';
// import '../static/css/bootstrap.css';
import './src/animations.css';
import './src/App.css';
import './src/index.css';
import './src/cards.css';

// import '/src/logo.svg';
import {Row} from 'react-bootstrap';
import Header from './src/header.js';
import Infographics from './src/infographics.js';
import IntroBanner from './src/introbanner.js';
import Skills from './src/skills.js';
import About from './src/about.js';
import Contact from './src/contact.js';
// import {SectionsContainer, Section} from 'react-fullpage';
class App extends Component {
  render() {
    return (
      <Row id="fullpage">
        <Header/>
        <IntroBanner/>
        <Infographics/>
        <div className="margin-section"></div>
        <div className="about" style={{
          color: "white"
        }} id="about">
          <About/>
        </div>
        <Skills/>
        <div className="margin-section"></div>
        <Contact/>
      </Row>
    );
  }
}

export default App;

// <div className="cd-3d-right-side"></div>
// <div className="cd-3d-left-side"></div>
// <div className="cd-3d-bottom-side"></div>
