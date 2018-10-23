import React, { Component } from 'react';
import './App.css';
import './cards.css';
import {  Col,  ProgressBar } from 'react-bootstrap';

class Skills extends Component {
  render() {
    return (
        <div className="container margin-section"  id="skills">
          <h1 className="text-center">Skills</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Ornare congue lacinia semper nascetur elit facilisis rutrum.</p>
            <div className="margin-section"></div>
          <Col md={4}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/1000px-Android_Studio_icon.svg.png" alt="android-studio" width={50}/>
            <span style={{marginLeft: "20px"}}>Android Studio</span>
            <ProgressBar bsStyle="info" now={90} label="90%" />

            <img src="https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg" alt="Photoshop" width={50}/>
            <span  style={{marginLeft: "20px"}}>Photoshop</span>
            <ProgressBar bsStyle="info" now={90} label="90%" />

            <img src="https://download.blender.org/institute/BlenderDesktopLogo.png" alt="Blender" width={50}/>
            <span style={{marginLeft: "20px"}}>Blender </span>
            <ProgressBar bsStyle="info" now={90} label="90%" />
          </Col>
          <Col md={4}>
            <img src="https://macosicongallery.com/img/512/xcode-2015.png" alt="Xcode" width={50}/>
            <span style={{marginLeft: "20px"}}>Xcode</span>
            <ProgressBar bsStyle="info" now={90} label="90%" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" height={50}/>
            <span style={{marginLeft: "20px"}}>PHP</span>
            <ProgressBar bsStyle="info" now={90} label="90%" />

            <img src="https://s.w.org/about/images/logos/wordpress-logo-notext-rgb.png" alt="Wordpress" width={50}/>
            <span style={{marginLeft: "20px"}}>Wordpress</span>
            <ProgressBar bsStyle="info" now={90} label="90%" />

          </Col>
          <Col md={4}>
            <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="React" width={50}/>
            <span style={{marginLeft: "20px"}}>React </span>
            <ProgressBar bsStyle="info" now={90} label="90%" />

          <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="NodeJS" height={50}/>
          <span style={{marginLeft: "20px"}}>Node Js</span>
          <ProgressBar bsStyle="info" now={90} label="90%" />
        </Col>

        </div>
    );
  }
}
export default Skills;
