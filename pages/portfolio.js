/** COMPONENTS */
import Navbar from "../components/portfolio/navbar/Navbar";
import Hero from "../components/portfolio/heroSection/HeroSectionPortfolio";
import Footer from "../components/portfolio/footer/Footer";
import ServicesRendered from "../components/portfolio/servicesRendered/ServicesRendered";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesRendered />
      <ScrollToTop smooth viewBox="0 0 47 46" svgPath="M 45.25269317626953 39 L 1.747308135032654 39 L 23.5 1.974141478538513 L 45.25269317626953 39 Z M 23.5 3.948284149169922 L 3.494617462158203 38 L 43.5053825378418 38 L 23.5 3.948284149169922 M 23.5 0 L 47 40 L 0 40 L 23.5 0 Z"/>
      <Footer />
    </>
  );
};

export default Home;
