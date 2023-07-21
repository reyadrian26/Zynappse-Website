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
    hasHeader: true,
    title: getLocalizedString("META_HOME_PAGE_LABEL"),
    imageUrl: `${ images.genericMetaImage }`,
    imageAlt: `zynappse`,
    imageWidth: 600,
    imageHeight: 600,
  };

  return (
    <MainLayout {...mainLayoutProps}>
      <Landing />
      <Footer/>
    </MainLayout>
  );
};

export default UnderConstructionWrapper(Home);
