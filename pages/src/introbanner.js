import React, {Component} from 'react';

class IntroBanner extends Component {
  render() {
    return (
      <div className="slantedDiv" id="home">
        <div id="parallax" className="slant">
          <div id="parallax2" data-parallaxify-range-x="10" data-parallaxify-range-y="10">
            <div id="stars1" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white"
            }} data-parallaxify-range-x="80" data-parallaxify-range-y="80">
              <div className="text-center animatedParent animateOnce">
                <h1 className="animatedParent animateOnce">
                  <span className="animated growIn delay-1000">We.</span>
                  <span className="animated growIn delay-2000">Build.</span>
                  <span className="animated growIn delay-3000">Beautiful.</span>
                  <span className="animated growIn delay-4000">Apps</span>
                </h1>
                <img className="animated growIn delay-5000" src={"http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/zynappse.svg"} width={350} style={{
                  zIndex: "3"
                }} alt="banner"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default IntroBanner;
