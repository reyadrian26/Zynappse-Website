/** LIBRARIES */
import dynamic from "next/dynamic";

import { images } from "components/assets";

import NewContactUs from "/components/NewContactUs";
import NavBar from "components/NavBar"
const MainLayout = dynamic(() => import("layout/main"));

import { getLocalizedString } from "strings";

const ContactUs = (props) => {
    let mainLayoutProps = {
        ...props,
        hasMetaTags: true,
        hasHeader: true,
        title: getLocalizedString("CONTACT_US_META_TITLE_LABEL"),
        imageUrl: `${ images.genericMetaImage }`,
        imageAlt: `zynappse`,
        imageWidth: 600,
        imageHeight: 600,
      };
    return ( 

        <MainLayout {...mainLayoutProps}>
            <NewContactUs />
        </MainLayout>
    );
}
 
export default ContactUs;