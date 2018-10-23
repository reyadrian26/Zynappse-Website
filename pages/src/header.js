import React, {Component} from 'react';
// import {images} from './../../public/assets';

import { Navbar, Nav,  NavItem } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="logo-pos animateOnce animatedParent" style={{ position: "fixed", zIndex: "1031" }}>
          <img className="img-logo exact-logo animated growIn delay-5000" src={"https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/logo.png"} alt="" style={{ width: "250px", paddingTop: "15px" }}/>
        </div>
        <Navbar inverse collapseOnSelect className="navbar-fixed-top" style={{ padding: "10px 0px" }}>
          <Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse id="nav" >
            <Nav pullRight className="text-white animateOnce animatedParent" >
              <NavItem id="HOME" className="animated growIn delay-5000"  >HOME</NavItem>
              <NavItem id="ABOUT" className="animated growIn delay-5000" >ABOUT</NavItem>
              <NavItem id="PORTFOLIO" className="animated growIn delay-5000" >PORTFOLIO</NavItem>
              <NavItem id="SKILLS" className="animated growIn delay-5000"  >SKILLS</NavItem>
              <NavItem id="CONTACT" className="animated growIn delay-5000" >CONTACT</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
// <img className="img-logo exact-logo animated growIn" src="https://www.zynappse.com/wp-content/uploads/2015/04/zynappse-op.png" alt="" style={{ width: "200px", paddingTop: "6px" }}/>
