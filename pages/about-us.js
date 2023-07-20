/** LIBRARIES */
import dynamic from "next/dynamic";

/** COMPONENTS */
const AboutUs = dynamic(() => import("components/AboutUs"));
const MainLayout = dynamic(() => import("layout/main"));


import { getLocalizedString } from "strings";


const AboutUsPage = (props) => {

    let mainLayoutProps = {
        ...props,
        hasMetaTags: true,
        hasHeader: true,
        title: getLocalizedString("META_ABOUT_PAGE_LABEL"),
      };
    return ( 
        <MainLayout {...mainLayoutProps}>
            <AboutUs/>
        </MainLayout>
    );
}
 
export default AboutUsPage;