import AboutUsComponent2 from "../components/NewAboutUs/page2_index";
import ProductsAndServices from "components/ProductsAndServices";
import NewMeetTheFoundersComponent from "../components/NewMeetTheFounders";
import Carousel from "../components/Carousel";
import NavBar from "components/NavBar"


const AboutUsRoute = () => {
    return ( 
        <>
            <NavBar />

            {/* Web 1920 – 5 */}
            <AboutUsComponent2 />
            <ProductsAndServices />
            <Carousel />
            <NewMeetTheFoundersComponent />
        </>
    );
}
 
export default AboutUsRoute;