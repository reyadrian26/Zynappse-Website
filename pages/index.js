/** LIBRARIES */
import dynamic from "next/dynamic";

/** COMPONENTS */
import UnderConstructionWrapper from "components/generics/UnderConstructionWrapper";
import MainLayout from "layout/main";
import Landing from "components/Landing"

import { images } from "components/assets";
import { getLocalizedString } from "strings";

const Home = (props) => {
  let mainLayoutProps = {
    ...props,
    hasMetaTags: true,
    hasHeader: true,
    hasFooter: true,
    title: getLocalizedString("META_HOME_PAGE_LABEL"),
    imageUrl: `${ images.genericMetaImage }`,
    imageAlt: `zynappse`,
    imageWidth: 600,
    imageHeight: 600,
  };

  return (
    <MainLayout {...mainLayoutProps}>
      <Landing />
    </MainLayout>
  );
};

export default UnderConstructionWrapper(Home);
