/** COMPONENTS */
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero Section/HeroSection";
import WhatWeDo from "../What-we-do/What-we-do";
import OurPortfolio from "../OurPortfolio/OurPortfolio";
import Footer from "../Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <OurPortfolio />
      <ScrollToTop smooth viewBox="0 0 47 46" svgPath="M 45.25269317626953 39 L 1.747308135032654 39 L 23.5 1.974141478538513 L 45.25269317626953 39 Z M 23.5 3.948284149169922 L 3.494617462158203 38 L 43.5053825378418 38 L 23.5 3.948284149169922 M 23.5 0 L 47 40 L 0 40 L 23.5 0 Z"/>
      <Footer />
    </>
  );
};

export default Home;
