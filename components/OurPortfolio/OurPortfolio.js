import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { getLocalizedString } from "strings";
import Navbar from "../Navbar/Navbar";
import { Container, Header, Button } from "components/generics/SemanticUIReact";
import style from "./OurPortfolio.module.scss";
import Image from "next/future/image";
import projectImage1 from "../../assets/projectImage1.png";
import projectImage2 from "../../assets/projectImage2.png";
import projectImage3 from "../../assets/projectImage3.png";
import projectImage4 from "../../assets/projectImage4.png";
import projectImage5 from "../../assets/projectImage5.png";
import Link from "next/link";

const images = [
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
];

const projectDetails = [
  {
    clientName: "Client 1",
    projectName: "Project 1",
  },
  {
    clientName: "Client 2",
    projectName: "Project 2",
  },
  {
    clientName: "Client 3",
    projectName: "Project 3",
  },
  {
    clientName: "Client 4",
    projectName: "Project 4",
  },
  {
    clientName: "Client 5",
    projectName: "Project 5",
  },
];

const OurPortfolio = () => {
  const { ref: containerRef, inView: myContainerIsVisible } = useInView();
  const [animatedContainerOnce, setAnimatedContainerOnce] = useState(false);
  const { ref: headerRef, inView: myHeaderIsVisible } = useInView();
  const [animatedHeaderOnce, setAnimatedHeaderOnce] = useState(false);
  const { ref: imageSliderRef, inView: mySliderIsVisible } = useInView();
  const [animatedSliderOnce, setAnimatedSliderOnce] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isFinalImageReached, setIsFinalImageReached] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (myContainerIsVisible && !animatedContainerOnce) {
      setAnimatedContainerOnce(true);
    }
  }, [myContainerIsVisible, animatedContainerOnce]);

  useEffect(() => {
    if (myHeaderIsVisible && !animatedHeaderOnce) {
      setAnimatedHeaderOnce(true);
    }
  }, [myHeaderIsVisible, animatedHeaderOnce]);

  useEffect(() => {
    if (mySliderIsVisible && !animatedSliderOnce) {
      setAnimatedSliderOnce(true);
    }
  }, [mySliderIsVisible, animatedSliderOnce]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSliderActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isSliderActive) {
      interval = setInterval(() => {
        setAnimationKey((prevKey) => prevKey + 1);
        setCurrentIndex((prevIndex) => {
          if (prevIndex + 1 === images.length) {
            clearInterval(interval);
            setIsFinalImageReached(true);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isSliderActive]);

  return (
    <>
      <div className={style.containerRef} ref={containerRef}></div>
      <Container className="ourPortfolioContainer">
        <Container
          className={`leftSide home ${
            animatedContainerOnce ? "animateLeftContainer" : ""
          }`}
        ></Container>
        <Container
          className={`rightSide home ${
            animatedContainerOnce ? "animateRightContainer" : ""
          }`}
        >
          <Container className={style.rightSideContainer}>
            <Container
              className={`clientName ${
                animatedContainerOnce ? style.animateClientName : ""
              }`}
            >
              {projectDetails[currentIndex].clientName}
            </Container>
            <Container className={style.projectDetails}>
              <Header
                as="h1"
                content={projectDetails[currentIndex].projectName}
                className={`${style.projectName} ${
                  animatedHeaderOnce ? style.animateProjectName : ""
                }`}
              ></Header>
              <Header
                as="h5"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                className={`${style.projectDescription} ${
                  animatedHeaderOnce ? style.animateProjectDescription : ""
                }`}
              ></Header>
            </Container>
          </Container>
        </Container>

        <div
          className={`${style.imageSlider} ${
            animatedHeaderOnce ? style.animateImageSlider : ""
          }`}
          ref={sliderRef}
        >
          <div className={style.counter}>
            <div className={style.totalImages}>
              {String(images.length).padStart(2, "0")}
            </div>
            <div className={style.verticalLine}>
              <div
                key={animationKey}
                className={`${style.progressLine} ${
                  isFinalImageReached ? style.final : ""
                }`}
              ></div>
            </div>
            <div className={style.currentImage}>
              {(currentIndex + 1).toString().padStart(2, "0")}
            </div>
          </div>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${style.imageContainer} ${
                index === currentIndex ? style.active : ""
              }`}
            >
              <Image src={image} className={style.imageOverlay} layout="raw" />
            </div>
          ))}
        </div>
        <div ref={headerRef}>
          <Header
            as="h1"
            content="OUR PORTFOLIO"
            className={`${style.header} ${
              animatedHeaderOnce ? style.animateHeader : ""
            }`}
          ></Header>
        </div>
        <Header as="h5" content="ZYNPPS" className={style.zynpps}></Header>
        <Link href="/portfolio">
          <Button className={`${style.viewMoreBtn} ${
                  animatedHeaderOnce ? style.animateViewMoreBtn : ""
                }`}>
            VIEW MORE <span className={style.arrow}>&#10148;</span>{" "}
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default OurPortfolio;
