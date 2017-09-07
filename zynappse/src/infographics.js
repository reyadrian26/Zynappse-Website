import React, {Component} from 'react';
import './App.css';
import './cards.css';
import {  Col  } from 'react-bootstrap';
import {images} from './assets';

class Infographics extends Component {
  render() {
    return (
      <div className="container margin-section ">
        <div  className="text-center animatedParent animateOnce">
          <h2 className="text-center animated fadeInUpShort">What We Do</h2>

        </div>
        <div className="margin-section"></div>
        <Col md={12}>
          <Col md={6} className="text-center animatedParent animateOnce">
            <img className="animated fadeInLeft" src={images.appsolution} alt="appsolution" height={200}/>
          </Col>
          <Col md={6} className="text-left animatedParent animateOnce">
            <h3 className="animated fadeInRight">Mobile App</h3><br/>
            <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Col>
        <Col md={12}>
          <div className="margin-section"></div>
        </Col>
        <Col md={12}>
          <Col md={6} className="text-center animatedParent animateOnce">
            <img className="animated fadeInLeft delay-250" src={images.websolution2} alt="websolution" height={200}/>
          </Col>
          <Col md={6} className="text-left animatedParent animateOnce">
            <h3 className="animated fadeInRight delay-250">Web and Ecommerce</h3>
            <p className="animated fadeInRight delay-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Col>
        <Col md={12}>
          <div className="margin-section"></div>
        </Col>
        <Col md={12}>
          <Col md={6} className="text-center animatedParent animateOnce">
            <img className="animated fadeInLeft " src={images.cloud2} alt="cloud" height={200}/>
          </Col>
          <Col md={6} className="text-left animatedParent animateOnce">
            <h3 className="animated fadeInRight ">Cloud and Database Management</h3>
            <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Col>
        <Col md={12}>
          <div className="margin-section"></div>
        </Col>
        <Col md={12}>
          <Col md={6} className="text-center animatedParent animateOnce">
            <img className="animated fadeInLeft" src={images.ai} alt="artificial-intelligence" height={200}/>
          </Col>
          <Col md={6} className="text-left animatedParent animateOnce">
            <h3 className="animated fadeInRight">Artificial Intelligence</h3><br/>
            <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Col>
        <Col md={12}>
          <div className="margin-section"></div>
        </Col>
        <Col md={12}>
          <Col md={6} className="text-center animatedParent animateOnce">
            <img className="animated fadeInLeft " src={images.ar} alt="augmented-reality" height={200}/>
          </Col>
          <Col md={6} className="text-left animatedParent animateOnce">
            <h3 className="animated fadeInRight">Augmented Reality</h3>
            <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Col>
      </div>
    );
  }
}
export default Infographics;
