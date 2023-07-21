/** LIBRARIES */
import dynamic from "next/dynamic";

/** COMPONENTS */
import UnderConstructionWrapper from "components/generics/UnderConstructionWrapper";
import MainLayout from "layout/main";
import Landing from "components/Landing"
const Footer = dynamic(() => import("components/generics/Footer"));
import NewContactUs from "/components/NewContactUs";
import ProductsAndServices from "components/ProductsAndServices";
import NewMeetTheFoundersComponent from "../components/NewMeetTheFounders";
import Carousel from "../components/Carousel";

import NavBar from "components/NavBar"

import { getLocalizedString } from "strings";

const Home = (props) => {
  let mainLayoutProps = {
    ...props,
    hasMetaTags: true,
    title: getLocalizedString("META_HOME_PAGE_LABEL"),
  };

  return (
    <MainLayout {...mainLayoutProps}>
      <NavBar />
      
      {/* Web 1920 – 1 */}
      <Landing />

      {/* Web 1920 – 6 */}
      {/* <NewContactUs /> */}

      {/* Web 1920 – 5 */}
      {/* <AboutUsComponent2 />
      <ProductsAndServices />
      <Carousel />
      <NewMeetTheFoundersComponent /> */}
      <Footer/>
    </MainLayout>
  );
};

export default UnderConstructionWrapper(Home);
