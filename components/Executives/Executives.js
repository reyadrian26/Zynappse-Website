import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Header } from "components/generics/SemanticUIReact";
import style from "./Executives.module.scss";
import Image from "next/future/image";
import zynappseExecutives from "../../assets/Zynappse-Executives.png";
import executiveImage1 from "../../assets/executiveImage1.png";
import executiveImage2 from "../../assets/executiveImage2.png";
import executiveImage3 from "../../assets/executiveImage3.png";
import executiveImage4 from "../../assets/executiveImage4.png";
import executiveImage5 from "../../assets/executiveImage5.png";

const images = [
  executiveImage1,
  executiveImage2,
  executiveImage3,
  executiveImage4,
  executiveImage5,
];

const executiveDetails = [
  {
    name: "Chris Tagle",
    position: "Chief Executive Officer",
  },
  {
    name: "Allan Javier",
    position: "Chief Information Officer",
  },
  {
    name: "Racheller Consul",
    position: "Chief Marketing Officer",
  },
  {
    name: "John Paul Orpilla",
    position: "Chief Technology Officer",
  },
  {
    name: "Trixia Betito",
    position: "Multimedia Director",
  },
];

const Executives = () => {
  const { ref: containerRef, inView: myContainerIsVisible } = useInView();
  const [animatedContainerOnce, setAnimatedContainerOnce] = useState(false);
  const [showZynappseExecutives, setShowZynappseExecutives] = useState(true);
  const [animationApplied, setAnimationApplied] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isFinalImageReached, setIsFinalImageReached] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (myContainerIsVisible && !animatedContainerOnce) {
      setAnimatedContainerOnce(true);
      setTimeout(() => {
        setShowZynappseExecutives(false);
        setAnimationApplied(true);
      }, 2000);
    }
  }, [myContainerIsVisible, animatedContainerOnce]);

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
      <Image
        src={zynappseExecutives}
        className={`${style.zynappseExecutives} ${
          animatedContainerOnce && !animationApplied ? style.animateImage : ""
        } ${!showZynappseExecutives ? style.hidden : ""}`}
        layout="raw"
      />
      <div className={style.containerRef} ref={containerRef}></div>
      <Container
        className={`executivesContainer ${
          animatedContainerOnce ? style.animateExecutivesContainer : ""
        }`}
      >
        <Container className="leftSide"></Container>
        <Container className="rightSide">
          <Container className={style.rightSideContainer}>
            <Container className={style.executiveDetails}>
              <Header
                as="h1"
                content={executiveDetails[currentIndex].name}
                className={style.executiveName}
              ></Header>
              <Container className="position">
                {executiveDetails[currentIndex].position}
              </Container>
              <Header
                as="h5"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                className={style.executiveDescription}
              ></Header>
            </Container>
          </Container>
        </Container>

        <div className={style.imageSlider} ref={sliderRef}>
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

        <Header as="h5" content="ZYNPPS" className={style.topText1}></Header>
        <Header as="h5" content="CORE" className={style.topText2}></Header>
        <Header
          as="h5"
          content="EXECUTIVE"
          className={style.bottomText}
        ></Header>
      </Container>
    </>
  );
};

export default Executives;
