import React, { Component } from 'react';
import './App.css';
import './cards.css';
import {images} from './assets';

import {  Col  } from 'react-bootstrap';

class Skills extends Component {
  render() {
    return (
        <div className="container margin-section  animatedParent animateOnce"  id="skills">
            <div>
              <h1 className="text-center animated fadeInLeft" >Technology Stack</h1>
            </div>
            <div className="margin-section"></div>
          <Col md={4} className="text-center   animatedParent animateOnce">
              <img width={200} src={images.android} alt="android" className="animated growIn" />
                <h2 className="gradient animated growIn">99%</h2>

            <p className="animated growIn">Android</p>
          </Col>
          <Col md={4} className="text-center  animatedParent animateOnce">
            <img height={200} src={images.apple} alt="apple" className="animated growIn"  />
              <h2 className="gradient animated growIn">99%</h2>

            <p className="animated growIn" >IOS</p>

          </Col>
          <Col md={4} className="text-center  animatedParent animateOnce">
            <img width={200} src={images.web}  alt="web" className="animated growIn" />
              <h2 className="gradient animated growIn">99%</h2>

            <p className="animated growIn" >Web</p>

        </Col>

        </div>
    );
  }
}
export default Skills;
