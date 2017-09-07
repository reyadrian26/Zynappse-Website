import React, {Component} from 'react';
import { Col, Carousel} from 'react-bootstrap';
// import {images} from '../assets';
// import '../css/linkgrid.css';
import {images} from './assets';

export default class CarouselBanner extends Component {
  render() {
    return (
      <div className="container">
        <Carousel indicators={false}>
          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated tada" src={images.rwm} alt="rwm" width={230}/>
                </div>
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated tada" src={images.rwm} alt="rwm" width={230}/>
                </div>
                <a className="cd-close-product-tour cd-img-replace">img2</a>
              </div>
            </Col>
            <Col md={6} className="text-left   ">
              <Carousel.Caption className="animatedParent animateOnce">
                <h3 className="text-left animated fadeInUp">Resorts World Manila</h3>
                <p className="text-left  animated fadeInUp delay-250">This Resorts World Manila Mobile Companion is your best friend in and around the Philippines’ First Integrated
                Entertainment Hub. Get updated on the latest promotions and events that are happening at the resort. Look up
                movie schedules from the Newport Cinemas. Browse through the Resorts World Manila Exclusives packages.
                Never be without your Resorts World Manila Mobile Companion.
                </p>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated tada" src={images.alaska} alt="alaska" width={230}/>
                </div>
                <a className="cd-close-product-tour cd-img-replace">img2</a>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption className="animatedParent animateOnce">
                <h3 className="text-left animated fadeInUp ">Alaska Aces</h3>
                <p className="text-left animated fadeInUp delay-250 ">The Official Alaska Aces PBA Basketball Team iPhone App. Stay connected to the Alaska Aces
everywhere you go. Get Alaska Aces news, player profiles, schedules and more.
                </p>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated tada" src={images.myblood} alt="myblood" width={230}/>
                </div>
                <a className="cd-close-product-tour cd-img-replace">img2</a>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption>
                <h3 className="text-left">My Blood</h3>
                <p className="text-left">My Blood is a healthy lifestyle app that graphically presents and tracks your lab results. It gives health recommendations based on your calculated risk of developing lifestyle diseases. This app is only available for use on select tests from partner laboratories.
                </p>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup animatedParent animateOnce">
                  <img className="mofoid animated tada" src={images.unfold} alt="unfold-app" width={230}/>
                </div>
                <a className="cd-close-product-tour cd-img-replace">img2</a>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption>
                <h3 className="text-left">Unfold App</h3>
                <p className="text-left">Unfold is an app that makes Master Choa Kok Sui’s teachings more modern and accessible than ever before. The app allows users to receive daily nuggets of inspiration from his teachings and also allows them to personalize the quotes through various fonts, backgrounds, and stickers. Users can then share these personalized quotes through popular social media accounts such as Facebook, Twitter, Instagram, and Pinterest.
                </p>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col md={6}>
              <div className="cd-product">
                <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                  <img className="mofoid animated tada" src={images.flashunt} alt="flashunt" width={230}/>
                </div>
                <a className="cd-close-product-tour cd-img-replace">img2</a>
              </div>
            </Col>
            <Col md={6} className="text-left">
              <Carousel.Caption>
                <h3 className="text-left">Flashunt</h3>
                <p className="text-left">FLASHUNT is a mobile scavenger hunt app that engages its users in physical tasks and the excitement of Augmented Reality! Made even more interactive with its in-app sharing of user’s experience to their Social Media accounts. This app makes use of the latest digital solutions to deliver a relevant and truly rewarding experience!
                </p>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>
        <Carousel.Item>
          <Col md={6}>
            <div className="cd-product">
              <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                <img className="mofoid animated tada" src={images.locali} alt="locali" width={230}/>
              </div>
              <a className="cd-close-product-tour cd-img-replace">img2</a>
            </div>
          </Col>
          <Col md={6} className="text-left">
            <Carousel.Caption>
              <h3 className="text-left">Locali</h3>
              <p className="text-left">An integrated tourism app that will turn any tourist into a local citizen of Manila, LOCALi revolutionizes the way tourists immerse themselves in the beautiful Capital of the Philippines. With an interface that allows users to scan through the city for virtually anything they want – from restaurants, to cultural spots, to holes-in-the-wall – this revolutionary app is the be-all and end-all of any tourism guides in the city.
              </p>
            </Carousel.Caption>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col md={6}>
            <div className="cd-product">
              <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                <img className="mofoid animated tada" src={images.redstar} alt="redstar" width={230}/>
              </div>
              <a className="cd-close-product-tour cd-img-replace">img2</a>
            </div>
          </Col>
          <Col md={6} className="text-left">
            <Carousel.Caption>
              <h3 className="text-left">Redstar</h3>
              <p className="text-left">Redstar is a new app in an era where the attention span of smart phone users tends to be short and passive, which makes the first impression of the website crucial by converting the traditional outlook of the website into an interactive one.
              </p>
            </Carousel.Caption>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col md={6}>
            <div className="cd-product">
              <div id="cd-product-tour" className="cd-product-mockup  animatedParent animateOnce">
                <img className="mofoid animated tada" src={images.oap} alt="oap" width={230}/>
              </div>
              <a className="cd-close-product-tour cd-img-replace">img2</a>
            </div>
          </Col>
          <Col md={6} className="text-left">
            <Carousel.Caption>
              <h3 className="text-left">Our Awesome Planet</h3>
              <p className="text-left">The Our Awesome Planet App is your personal travel guide to the most awesome food and travel experiences in the Philippines. Know the best restaurants, best places, and best travel experiences in the Philippines as curated by Anton Diaz, founder of the top food & travel blog in the Philippines and ASEAN since 2005. Get updated with the hidden experiences only a local insider can provide. It’s your one stop guide to Awesome Philippines.
              </p>
            </Carousel.Caption>
          </Col>
        </Carousel.Item>

        <Carousel.Item>
          <Col md={6}>
            <div className="cd-product">
              <div  className="  animatedParent animateOnce" style={{width: "100%"}}>
                <img className="mofoid animated tada" src={images.alaskaweb} alt="alaska-website" width={400}/>
              </div>
              <a className="cd-close-product-tour cd-img-replace">img2</a>
            </div>
          </Col>
          <Col md={6} className="text-left">
            <Carousel.Caption>
              <h3 className="text-left">Alaska Website</h3>
              <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </Carousel.Caption>
          </Col>
        </Carousel.Item>

        <Carousel.Item>
          <Col md={6}>
            <div className="cd-product">
              <div  className="  animatedParent animateOnce" style={{width: "100%"}}>
                <img className="mofoid animated tada" src={images.zygurtech} alt="zygurtech" width={400}/>
              </div>
              <a className="cd-close-product-tour cd-img-replace">img2</a>
            </div>
          </Col>
          <Col md={6} className="text-left">
            <Carousel.Caption>
              <h3 className="text-left">Zygurtech Website</h3>
              <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </Carousel.Caption>
          </Col>
        </Carousel.Item>




  </Carousel>
      </div>
    );
  }
}
