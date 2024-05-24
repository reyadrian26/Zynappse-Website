import React from 'react';
import Navbar from "../components/about/navbar/Navbar";
import Hero from "../components/about/heroSection/HeroSectionAbout";
import Footer from "../components/about/footer/Footer";
import WhoIsZynappse from "../components/about/whoIsZynappse/WhoIsZynappse";
import Executives from "../components/about/executives/Executives";
import MeetTheTeam from "../components/about/meetTheTeam/MeetTheTeam";
import OurStory from "../components/about/OurStory/OurStory";
import Achievements from "../components/about/achievements/Achievements";
import ScrollToTop from "react-scroll-to-top";


const About = () => {

  return (
    <>
        <Navbar />
        <Hero />
        <WhoIsZynappse/>
        <Executives />
        <MeetTheTeam />
        <OurStory />
        <Achievements />
        <ScrollToTop smooth viewBox="0 0 47 46" svgPath="M 45.25269317626953 39 L 1.747308135032654 39 L 23.5 1.974141478538513 L 45.25269317626953 39 Z M 23.5 3.948284149169922 L 3.494617462158203 38 L 43.5053825378418 38 L 23.5 3.948284149169922 M 23.5 0 L 47 40 L 0 40 L 23.5 0 Z"/>
        <Footer />
    </>
  );
};

export default About;
