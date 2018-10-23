import React, {Component} from 'react';
import {Col, Carousel} from 'react-bootstrap';
// import {images} from '../assets';
// import '../css/linkgrid.css';
import {images} from './assets';
// eslint-disable-next-line
export default class CarouselBanner extends Component {
  render() {
    return (
      <div className="container">
        <Carousel indicators={false}>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated fadeInDown" src={images.rwm2} alt="rwm" width={230}/>
                </div>
                <div id="cd-product-tour" className="cd-product-mockup cards2 animatedParent animateOnce" style={{
                  transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
                }}>
                  <img className="mofoid animated fadeInUp delay-500" src={images.rwm} alt="rwm" width={230}/>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-left   ">
              <Carousel.Caption className="animatedParent animateOnce text-left">
                <h3 className="text-left animated fadeInUp">Resorts World Manila</h3>
                <p className="text-left  animated fadeInUp delay-250">This Resorts World Manila Mobile Companion is your best friend in and around the Philippines’ First Integrated Entertainment Hub. Get updated on the latest promotions and events that are happening at the resort. Look up movie schedules from the Newport Cinemas. Browse through the Resorts World Manila Exclusives packages.
                </p>
                <p className="text-left animated fadeInUp delay-500">Available on:</p>
                <Col md={12} className="text-left animated fadeInUp delay-750">
                  <a href="https://play.google.com/store/apps/details?id=com.zynappse.rwmanila&hl=en" target="_blank"><img style={{
        paddingRight: "32px"
      }} src={images.android2} target="_blank" height="50"/></a>

                  <a className="text-left" href="https://itunes.apple.com/ph/app/rwm-mobile-app/id909015173?mt=8" target="_blank"><img src={images.apple2} target="_blank" height="50"/></a>

                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated fadeInDown" src={images.alaska2} alt="alaska" width={230}/>
                </div>
                <div id="cd-product-tour" className="cd-product-mockup cards2 animatedParent animateOnce" style={{
                  transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
                }}>
                  <img className="mofoid animated fadeInUp delay-500" src={images.alaska} alt="alaska" width={230}/>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="animatedParent animateOnce">
                <h3 className="text-left animated fadeInUp ">Alaska Aces</h3>
                <p className="text-left animated fadeInUp delay-250 ">The Official Alaska Aces PBA Basketball Team iPhone App. Stay connected to the Alaska Aces everywhere you go. Get Alaska Aces news, player profiles, schedules and more.
                </p>
                <p className="text-left animated fadeInUp delay-500">Available on:</p>
                <Col md={12} className="text-left animated fadeInUp delay-750">

                  <a href="https://play.google.com/store/apps/details?id=ph.com.alaskaaces&hl=en" target="_blank"><img style={{
        paddingRight: "32px"
      }} src={images.android2} target="_blank" height="50"/></a>

                  <a className="text-left" href="https://itunes.apple.com/ph/app/alaska-aces/id743641908?mt=8" target="_blank"><img src={images.apple2} target="_blank" height="50"/></a>

                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated fadeInDown" src={images.myblood2} alt="myblood" width={230}/>
                </div>
                <div id="cd-product-tour" className="cd-product-mockup cards2 animatedParent animateOnce" style={{
                  transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
                }}>
                  <img className="mofoid animated fadeInUp delay-500" src={images.myblood} alt="myblood" width={230}/>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="animatedParent animateOnce">
                <h3 className="text-left">My Blood</h3>
                <p className="text-left">My Blood is a healthy lifestyle app that graphically presents and tracks your lab results. It gives health recommendations based on your calculated risk of developing lifestyle diseases. This app is only available for use on select tests from partner laboratories.
                </p>
                <p className="text-left animated fadeInUp delay-500">Available on:</p>
                <Col md={12} className="text-left animated fadeInUp delay-750">

                  <a href="https://play.google.com/store/apps/details?id=com.mybloodprofile.myblood&hl=en" target="_blank"><img style={{
        paddingRight: "32px"
      }} src={images.android2} target="_blank" height="50"/></a>

                  <a className="text-left" href="https://itunes.apple.com/ph/app/myblood-profile/id1208015547?mt=8" target="_blank"><img src={images.apple2} target="_blank" height="50"/></a>

                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated fadeInDown" src={images.unfold2} alt="unfold" width={230}/>
                </div>
                <div id="cd-product-tour" className="cd-product-mockup cards2 animatedParent animateOnce" style={{
                  transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
                }}>
                  <img className="mofoid animated fadeInUp delay-500" src={images.unfold} alt="unfold" width={230}/>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="animatedParent animateOnce">
                <h3 className="text-left">Unfold App</h3>
                <p className="text-left">Unfold is an app that makes Master Choa Kok Sui’s teachings more modern and accessible than ever before. The app allows users to receive daily nuggets of inspiration from his teachings and also allows them to personalize the quotes through various fonts, backgrounds, and stickers.
                </p>
                <p className="text-left animated fadeInUp delay-500">Available on:</p>
                <Col md={12} className="text-left animated fadeInUp delay-750">

                  <a href="https://play.google.com/store/apps/details?id=com.unfold.unfold&hl=en" target="_blank"><img style={{
        paddingRight: "32px"
      }} src={images.android2} target="_blank" height="50"/></a>

                  <a className="text-left" href="https://itunes.apple.com/ph/app/unfold-app/id830612465?mt=8" target="_blank"><img src={images.apple2} target="_blank" height="50"/></a>

                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated fadeInDown" src={images.flashunt2} alt="flashunt" width={230}/>
                </div>
                <div id="cd-product-tour" className="cd-product-mockup cards2 animatedParent animateOnce" style={{
                  transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
                }}>
                  <img className="mofoid animated fadeInUp delay-500" src={images.flashunt} alt="flashunt" width={230}/>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="animatedParent animateOnce">
                <h3 className="text-left">Flashunt</h3>
                <p className="text-left">FLASHUNT is a mobile scavenger hunt app that engages its users in physical tasks and the excitement of Augmented Reality! Made even more interactive with its in-app sharing of user’s experience to their Social Media accounts. This app makes use of the latest digital solutions to deliver a relevant and truly rewarding experience!
                </p>
                <p className="text-left animated fadeInUp delay-500">Available on:</p>
                <Col md={12} className="text-left animated fadeInUp delay-750">

                  <a href="https://play.google.com/store/apps/details?id=com.zynappse.flashnt&hl=en" target="_blank"><img src={images.android2} target="_blank" height="50"/></a>

                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated fadeInDown" src={images.locali2} alt="locali" width={230}/>
                </div>
                <div id="cd-product-tour" className="cd-product-mockup cards2 animatedParent animateOnce" style={{
                  transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
                }}>
                  <img className="mofoid animated fadeInUp delay-500" src={images.locali} alt="locali" width={230}/>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="animatedParent animateOnce">
                <h3 className="text-left">Locali</h3>
                <p className="text-left">An integrated tourism app that will turn any tourist into a local citizen of Manila, LOCALi revolutionizes the way tourists immerse themselves in the beautiful Capital of the Philippines. With an interface that allows users to scan through the city for virtually anything they want – from restaurants, to cultural spots, to holes-in-the-wall, etc.
                </p>
                <p className="text-left animated fadeInUp delay-500">Available on:</p>
                <Col md={12} className="text-left animated fadeInUp delay-750">
                  <Col md={3} className="text-left">
                    <a href="https://play.google.com/store/apps/details?id=com.zynappse.locali&hl=en" target="_blank"><img src={images.android2} target="_blank" height="50"/></a>
                  </Col>
                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated fadeInDown" src={images.oap2} alt="oap" width={230}/>
                </div>
                <div id="cd-product-tour" className="cd-product-mockup cards2 animatedParent animateOnce" style={{
                  transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
                }}>
                  <img className="mofoid animated fadeInUp delay-500" src={images.oap} alt="oap" width={230}/>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="animatedParent animateOnce">
                <h3 className="text-left">Our Awesome Planet</h3>
                <p className="text-left">The Our Awesome Planet App is your personal travel guide to the most awesome food and travel experiences in the Philippines. Know the best restaurants, best places, and best travel experiences in the Philippines as curated by Anton Diaz, founder of the top food & travel blog in the Philippines and ASEAN since 2005.
                </p>
                <p className="text-left animated fadeInUp delay-500">Available on:</p>
                <Col md={12} className="text-left animated fadeInUp delay-750">

                  <a href="https://play.google.com/store/apps/details?id=com.zynappse.ourawesomeplanet&hl=en" target="_blank"><img style={{
        paddingRight: "32px"
      }} src={images.android2} target="_blank" height="50"/></a>

                  <a className="text-left" href="https://itunes.apple.com/ph/app/our-awesome-planet/id926617833?mt=8" target="_blank"><img src={images.apple2} target="_blank" height="50"/></a>

                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div className="  animatedParent animateOnce" style={{
                  width: "100%"
                }}>
                  <img className="mofoid animated tada" src={images.alaskaweb} alt="alaska-website" width={400}/>
                </div>
                <a className="cd-close-product-tour cd-img-replace">img2</a>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="  animatedParent animateOnce">
                <h3 className="text-left">Alaska Website</h3>
                <p className="text-left">One of the famous PBA Sports Team in the Philippines.
                </p>
                <Col md={12} className="text-left animated fadeInUp ">
                  <a href="https://www.alaskaaces.com.ph/" target="_blank"><img src={images.web2} target="_blank" width="50"/></a>
                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div className="  animatedParent animateOnce" style={{
                  width: "100%"
                }}>
                  <img className="mofoid animated tada" src={images.zygurtech} alt="zygurtech" width={400}/>
                </div>

              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="  animatedParent animateOnce">
                <h3 className="text-left">Zygurtech Website</h3>
                <p className="text-left">An IT company solutions based in US.
                </p>
                <Col md={12} className="text-left animated fadeInUp ">
                  <a className="text-left" href="https://www.zygurtech.com/" target="_blank"><img src={images.web2} target="_blank" width="50"/></a>
                </Col>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>

        </Carousel>
        <Col md={12} className="text-center">
          <a href={images.portfolio} download="Zynappse_ProfilePortfolio" target="_blank" className="btn-custom" style={{
            color: "#fff"
          }}>Download our Portfolio</a>

        </Col>
      </div>
    );
  }
}
