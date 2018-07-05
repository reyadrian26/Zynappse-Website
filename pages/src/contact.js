import React, {Component} from 'react';

import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ButtonToolbar,
  Button,
  Popover,
  Overlay
} from 'react-bootstrap';

// import {images} from './../../public/assets';
// import MapsDiv from './map.js';

class Contact extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = e => {
      this.setState({
        target: e.target,
        show: !this.state.show
      });
    };

    this.state = {
      show: false
    };
  }

  render() {

    return (
      <Row className="contact margin-section slantedDivContact" style={{
        color: "white",
        marginBottom: "-333px"
      }} id="contact">
        <div className="container  animatedParent animateOnce slant-contact">
          <h1 className="text-center animated fadeInLeft">Contact Us</h1>
          <div className="margin-section"></div>

          <Col md={12} className="animatedParent animateOnce">

            <ButtonToolbar>

              <p onClick={this.handleClick} className="text-center animated fadeInRight"><img src={"/static/pointer.svg"} alt="location" width={30}/>
                <span style={{
                  paddingLeft: "20px"
                }}>4F RFM Corporate Center, Pioneer cor Sheridan Sts., Mandaluyong City
                </span>
              </p>
              <Overlay show={this.state.show} target={this.state.target} placement="top" container={this} containerPadding={20}>
                <Popover id="popover-contained" title="Popover bottom" style={{
                  transform: " skewY(4deg)"
                }}></Popover>
              </Overlay>
            </ButtonToolbar>

            <p className="text-center animated fadeInRight delay-250">
              <a href="tel:576-3727"><img src={"/static/phone.svg"} alt="contact-no" width={27}/></a>
              <span style={{
                paddingLeft: "20px"
              }}>
                <a href="tel:576-3727" style={{
                  color: "white"
                }}>+63. 2. 576-3727</a>
              </span>
            </p>

            <p className="text-center animated fadeInRight delay-500">
              <a style={{
                color: "white"
              }} href="mailto:hi@zynappse.com?Subject=Hello%20" target="_top"><img src={"/static/mail.svg"} alt="email" width={27}/></a>
              <span style={{
                paddingLeft: "20px"
              }}>
                <a style={{
                  color: "white"
                }} href="mailto:hi@zynappse.com?Subject=Hello%20" target="_top">hi@zynappse.com</a>
              </span>
            </p>
            <hr className="animated fadeInRight delay-750"></hr>
            <Col md={12} className="animated fadeInRight delay-1000" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start"
            }}>
              <a style={{
                color: "white"
              }} href="https://www.facebook.com/zynappse/" target="_blank"><img src={"/static/facebook.svg"} alt="facebook" width={50} style={{
        padding: "0 10px"
      }}/></a>

              <a style={{
                color: "white"
              }} href="https://www.youtube.com/channel/UCMB0M5r5vvQ1mowPyKJW8bQ" target="_blank"><img src={"/static/youtube.svg"} alt="youtube" width={50} style={{
        padding: "0 10px"
      }}/></a>

              <a style={{
                color: "white"
              }} href="https://ph.linkedin.com/in/zynappse-corporation-535885a2" target="_blank"><img src={"/static/linkedin.svg"} alt="linkedin" width={50} style={{
        padding: "0 10px"
      }}/></a>

            </Col>

          </Col>
        </div>

        <div className="margin-section"></div>

      </Row>

    );
  }
}

export default Contact;
