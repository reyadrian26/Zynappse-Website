import React, {Component} from 'react';

// import {images} from './../../public/assets';

import {Col} from 'react-bootstrap';

class Skills extends Component {
  render() {
    return (
      <div className="container margin-section  animatedParent animateOnce" id="skills">
        <div>
          <h1 className="text-center animated fadeInLeft">Technology Stack</h1>
        </div>
        <div className="margin-section"></div>
        <Col md={4} className="text-center   animatedParent animateOnce">
          <img width={200} src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_animation.gif"} alt="android" className="animated growIn"/>
          <h2 className="gradient animated growIn">99%</h2>

          <p className="animated growIn">Android</p>
        </Col>
        <Col md={4} className="text-center  animatedParent animateOnce">
          <img height={200} src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530848464/zynappse_website/apple_animation.gif"} alt="apple" className="animated growIn"/>
          <h2 className="gradient animated growIn">99%</h2>

          <p className="animated growIn">IOS</p>

        </Col>
        <Col md={4} className="text-center  animatedParent animateOnce">
          <img width={200} src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847140/zynappse_website/web.gif"} alt="web" className="animated growIn"/>
          <h2 className="gradient animated growIn">99%</h2>

          <p className="animated growIn">Web</p>

        </Col>

      </div>
    );
  }
}
export default Skills;
