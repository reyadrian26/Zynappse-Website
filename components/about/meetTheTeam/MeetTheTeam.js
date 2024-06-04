import React, { useState, useEffect } from "react";
import style from "./MeetTheTeam.module.scss";
import Image from "next/future/image";
import { useInView } from "react-intersection-observer";
import { Container, Header } from "components/generics/SemanticUIReact";
import { imageSources } from "./MeetTheTeamData";

const MeetTheTeam = () => {
  const { ref: headerRef, inView: myHeaderIsVisible } = useInView();
  const [animatedHeaderOnce, setAnimatedHeaderOnce] = useState(false);
  const [animateImages, setAnimateImages] = useState(false);
  const [clickedImages, setClickedImages] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile(); 
    window.addEventListener('resize', checkIsMobile); 

    return () => {
      window.removeEventListener('resize', checkIsMobile); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    if (myHeaderIsVisible && !animatedHeaderOnce) {
      setAnimatedHeaderOnce(true);
      
      if (isMobile) {
       
        setTimeout(() => {
          setAnimateImages(true);
          setClickedImages(true);
        }, 1000); 
      }
    }
  }, [myHeaderIsVisible, animatedHeaderOnce, isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setAnimateImages(true);
    }
  };

  const handleContainerClick = () => {
    if (!isMobile) {
      setClickedImages(true);
    }
  };

  return (
    <>
      <Container className="meetTheTeamContainer" onClick={handleContainerClick}>
        <div ref={headerRef}>
          <Header
            as="h1"
            content="MEET THE TEAM"
            className={`${style.header} ${animatedHeaderOnce ? style.animateHeader : ""}`}
          />
          <Header
            as="h3"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            className={`${style.subheader} ${animatedHeaderOnce ? style.animateHeader : ""}`}
          />
        </div>
        <Container className="employeesContainer" onMouseEnter={handleMouseEnter}>
          {imageSources.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              className={`employeesImage ${image.className} ${image.animateCondition === "animateImages" && animateImages ? image.animateClass : ""} ${image.animateCondition === "clickedImages" && clickedImages ? image.animateClass : ""}`}
              layout="raw"
            />
          ))}
        </Container>
      </Container>
    </>
  );
};

export default MeetTheTeam;
