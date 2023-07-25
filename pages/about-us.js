/** LIBRARIES */
import dynamic from "next/dynamic";

/** COMPONENTS */
const AboutUs = dynamic(() => import("components/AboutUs"));
// const MainLayout = dynamic(() => import("layout/main"));
import MainLayout from "layout/main";


import { getLocalizedString } from "strings";
import { images } from "components/assets";


const AboutUsPage = (props) => {

    let mainLayoutProps = {
        ...props,
        hasMetaTags: true,
        hasHeader: true,
        hasFooter: true,
        title: getLocalizedString("META_ABOUT_PAGE_LABEL"),
        imageUrl: `${ images.genericMetaImage }`,
        imageAlt: `zynappse`,
        imageWidth: 600,
        imageHeight: 600,
      };
    return ( 
        <MainLayout {...mainLayoutProps}>
            <AboutUs/>
        </MainLayout>
    );
}
 
export default AboutUsPage;