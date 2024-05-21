import React, { useState, useEffect, useRef } from "react";
import style from "./Meet-the-team.module.scss";
// import Employees from "../../assets/Employees.png"
import Employees from "../../assets/EmployeePlaceholder.png";
import Employees2 from "../../assets/EmployeePlaceholder-2.png";
import Employees3 from "../../assets/EmployeePlaceholder-3.png";
import Employees4 from "../../assets/EmployeePlaceholder-4.png";
import Employees5 from "../../assets/EmployeePlaceholder-5.png";
import Image from "next/future/image";
import { useInView } from "react-intersection-observer";

/** SEMANTIC UI COMPONENTS */;
import {
  Container,
  Header,
  MenuItem,
  Menu,
  Segment,
  Button,
  Grid,
  GridRow,
  GridColumn,
  ListItem,
  List,
  Icon,
} from "components/generics/SemanticUIReact";

const MeetTheTeam = () => {
  const { ref: headerRef, inView: myHeaderIsVisible } = useInView();
  const [animatedHeaderOnce, setAnimatedHeaderOnce] = useState(false);
  const [animateImages, setAnimateImages] = useState(false);
  const [clickedImages, setClickedImages] = useState(false);

  useEffect(() => {
    if (myHeaderIsVisible && !animatedHeaderOnce) {
      setAnimatedHeaderOnce(true);
    }
  }, [myHeaderIsVisible, animatedHeaderOnce]);

  const handleMouseEnter = () => {
    setAnimateImages(true);
  };

  const handleContainerClick = () => {
    setClickedImages(true);
  };

  // Reset after clicking the container again

    // const handleContainerClick = () => {
    //   if (animateImages && !clickedImages) {
    //     setClickedImages(true);
    //   } else {
    //     setAnimateImages(false);
    //     setClickedImages(false);
    //   }
    // };
  
  return (
    <>
      <Container className="meetTheTeamContainer" onClick={handleContainerClick}>
      <div ref={headerRef}>
        <Header as="h1" content="MEET THE TEAM" className={`${style.header} ${animatedHeaderOnce ? style.animateHeader : ""}`}/>
        <Header
          as="h3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          className={`${style.subheader} ${animatedHeaderOnce ? style.animateHeader : ""}`}
        />
        </div>
        <Container className={style.employeesContainer} 
        onMouseEnter={handleMouseEnter} 
   >
            <Image src={Employees} className={`employeesImage image-1 ${animateImages ? 'animateImage1' : ""}`}layout="raw" />
            <Image src={Employees2} className={`employeesImage image-2 ${clickedImages ? 'animateImage2' : ""}`} layout="raw"/>
            <Image src={Employees3} className={`employeesImage image-3 ${clickedImages ? 'animateImage3' : ""}`} layout="raw" />
            <Image src={Employees4} className={`employeesImage image-4 ${clickedImages ? 'animateImage4' : ""}`} layout="raw" />
            <Image src={Employees5} className={`employeesImage image-5 ${clickedImages ? 'animateImage5' : ""}`} layout="raw" />
            <Image src={Employees4} className={`employeesImage image-6 ${clickedImages ? 'animateImage6' : ""}`} layout="raw" />
            <Image src={Employees3} className={`employeesImage image-7 ${clickedImages ? 'animateImage7' : ""}`} layout="raw" /> 
            <Image src={Employees} className={`employeesImage image-8 ${animateImages ? 'animateImage8' : ""}`} layout="raw" />
           <Image src={Employees2} className={`employeesImage image-9 ${clickedImages ? 'animateImage9' : ""}`} layout="raw"/>
            <Image src={Employees5} className={`employeesImage image-10 ${clickedImages ? 'animateImage10' : ""}`} layout="raw"/>
            <Image src={Employees5} className={`employeesImage image-11 ${clickedImages ? 'animateImage11' : ""}`} layout="raw"/>
            <Image src={Employees4} className={`employeesImage image-12 ${clickedImages ? 'animateImage12' : ""}`} layout="raw"/>
            <Image src={Employees3} className={`employeesImage image-13 ${clickedImages ? 'animateImage13' : ""}`} layout="raw"/>
            <Image src={Employees2} className={`employeesImage image-14 ${clickedImages ? 'animateImage14' : ""}`} layout="raw"/>
            <Image src={Employees} className={`employeesImage image-15 ${animateImages ? 'animateImage15' : ""}`} layout="raw" />
        </Container>
      </Container>
    </>
  );
};

export default MeetTheTeam;