import React, {Component} from 'react';

import {Col} from 'react-bootstrap';

class Infographics extends Component {
  render() {
    return (
      <div className="container margin-section ">
        <div className="text-center animatedParent animateOnce">
          <h2 className="text-center animated fadeInUpShort">What We Do</h2>

        </div>
        <div className="margin-section"></div>
        <Col md={12} className="text-center animatedParent animateOnce">
          <img className="animated fadeInLeft" src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/app-solution.svg"} alt="appsolution" height={200}/>
          <h3 className="animated fadeInRight">Mobile App</h3><br/>
        </Col>
        <Col md={12}>
          <div className="margin-section"></div>
        </Col>
        <Col md={12} className="text-center animatedParent animateOnce">
          <img className="animated fadeInLeft delay-250" src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/web-solution.svg"} alt="websolution" height={200}/>
          <h3 className="animated fadeInRight delay-250">Web and Ecommerce</h3>
        </Col>
        <Col md={12}>
          <div className="margin-section"></div>
        </Col>
        <Col md={12} className="text-center animatedParent animateOnce">
          <img className="animated fadeInLeft " src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cloud2.svg"} alt="cloud" height={200}/>
          <h3 className="animated fadeInRight ">Cloud and Database Management</h3>
        </Col>
        <Col md={12}>
          <div className="margin-section"></div>
        </Col>
        <Col md={12} className="text-center animatedParent animateOnce">
          <img className="animated fadeInLeft" src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/ai.svg"} alt="artificial-intelligence" height={200}/>
          <h3 className="animated fadeInRight">Artificial Intelligence</h3><br/>
        </Col>
        <Col md={12}>
          <div className="margin-section"></div>
        </Col>
        <Col md={12} className="text-center animatedParent animateOnce">
          <img className="animated fadeInLeft " src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/ar.svg"} alt="augmented-reality" height={200}/>
          <h3 className="animated fadeInRight">Augmented Reality</h3>
        </Col>
      </div>
    );
  }
}
export default Infographics;
