import React, {Component} from 'react';
import './App.css';
import './cards.css';
import { Col } from 'react-bootstrap';
import CarouselBanner from './carousel.js';

class About extends Component {
  render() {
    return (
      <div className="container">
        <Col md={12} className="margin-section animatedParent animateOnce">
          <h1 className="text-center animated fadeInLeft">About Us</h1>
          <div className="margin-section"></div>
          <p className="animated fadeInRight delay-250">Zynappse Corporation is a company that provides Information Technology (IT) solutions. Our IT development team is backed up by experienced management and industry consultants who are experts in aligning and merging technology and day-to-day operational requirements to achieve an efficient and effective system. We are a mobile apps developers and creators of custom friendly applications in mobile, desktop, enterprise, and cloud computing technologies. Our core expertise is in mobile applications or apps, made easy in two of the most in demand mobile platforms: android and iOS to help you reach ten folds of your market and customers particularly in the growing smart phone community.
          </p>
        </Col>
        <Col md={12} className="margin-section" id="portfolio">
          <h1 className="text-center">Portfolio</h1>
          <CarouselBanner/>
        </Col>
      </div>
    );
  }
}
export default About;
