/** LIBRARIES */
import dynamic from "next/dynamic";

/** COMPONENTS */
const PhoneSection = dynamic(() => import("./PhoneSection"));
const ProductsAndServices = dynamic(() => import("./ProductsAndServices"));
const MeetTheFoundersComponent = dynamic(() => import("./MeetTheFounders"));
const Carousel = dynamic(() => import("./Carousel"));
const ClockSection = dynamic(() => import("./ClockSection"));

import NavBar from "components/NavBar"

const AboutUs = () => {
  return (
    <>
        <PhoneSection />
        <ProductsAndServices />
        <ClockSection />
        <Carousel />
        <MeetTheFoundersComponent />
    </>
  )
}

export default AboutUs