/** COMPONENTS */
import UnderConstructionWrapper from "components/generics/UnderConstructionWrapper";
import MainLayout from "layout/main";
import Landing from "components/Landing"
import Services from "components/Services";
import AboutUsComponent2 from "../components/NewAboutUs/page2_index";
import AboutUsComponent from "../components/NewAboutUs/index";
import NewContactUs from "/components/NewContactUs";
import ProductsAndServices from "components/ProductsAndServices";
import NewProjects from "components/New-Projects-page";
import SkillsComponent from "components/Skills";
import AccomplishmentsComponent from "../components/AccomplishmentsPage";
import NewMeetTheFoundersComponent from "../components/NewMeetTheFounders";
import TechStackComponent from "components/TechStack";
import Carousel from "../components/Carousel";
import NavBar from "components/NavBar"

const Home = (props) => {
  let mainLayoutProps = {
    ...props,
    hasMetaTags: true,
  };

  return (
    <MainLayout {...mainLayoutProps}>
      <NavBar />
      
      {/* Web 1920 – 1 */}
      <Landing />
      <Services />
      <AboutUsComponent />
      <NewProjects />
      <AccomplishmentsComponent />
      <SkillsComponent />
      <TechStackComponent />

      {/* Web 1920 – 6 */}
      {/* <NewContactUs /> */}

      {/* Web 1920 – 5 */}
      {/* <AboutUsComponent2 />
      <ProductsAndServices />
      <Carousel />
      <NewMeetTheFoundersComponent /> */}
    </MainLayout>
  );
};

export default UnderConstructionWrapper(Home);
