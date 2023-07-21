/** LIBRARIES */
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

/** COMPONENTS */
const DesktopCarousel = dynamic(() => import("./DesktopCarousel"));

import { getLocalizedString } from "strings";
import { images } from "components/assets";

/** SEMANTIC */
const Header = dynamic(() => import("semantic-ui-react").then(({ Header }) => Header));

/** STYLES */
import style from "styles/main.module.scss";

/*Import Animation Variants*/
import {
  moveContainer,
  moveLabelContainer,
  opacity,
} from "./AnimationVariants";

/** CONSTANTS */
import {
  PROJECTS_MOBILE_APPS,
  PROJECTS_WEBSITES,
  PROJECTS_CONTENT_MANAGEMENT_APP,
  PROJECTS_MOTION_DIV
} from "components/constants";

const NewProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeArray, setActiveArray] = useState(PROJECTS_MOBILE_APPS);
  const [activeLabel, setActiveLabel] = useState();
  const [activeCarousel, setActiveCarousel] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const updateIndex = (newIndex) => {
    const projectsLength = activeArray.length;
    newIndex %= projectsLength

    setActiveIndex(newIndex);
  };

  const handleButtonClick = (array) => {
    setActiveArray(array);
    setActiveIndex(0);
  };

  // FOR AUTOPLAY
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2000);

    return () => clearInterval(autoplayInterval);
  }, [activeIndex]);

  const handleClick = (label) => {
    const isLargeScreen = window.innerWidth > 1024;

    setActiveLabel(isLargeScreen ? label : "");
    setIsButtonClicked(!isLargeScreen);
    setActiveCarousel(label);

    if (label === "mobileAppsProjLabel") {
      handleButtonClick(PROJECTS_MOBILE_APPS);
    } else if (label === "websiteProjLabel") {
      handleButtonClick(PROJECTS_WEBSITES);
    } else {
      handleButtonClick(PROJECTS_CONTENT_MANAGEMENT_APP);
    }
  };

  const getFirstAnimationVariant = () => {
    if (activeLabel === "mobileAppsProjLabel") {
      return moveContainer;
    } else if (activeLabel === "websiteProjLabel") {
      return moveContainer;
    } else {
      return moveContainer;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setActiveLabel(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const motionDivProps = {
    activeCarousel,
    activeLabel,
    handleClick,
    isButtonClicked
  }

  const desktopCorouselProps = {
    activeLabel,
    activeArray,
    activeIndex,
    updateIndex
  }

  return (
    <>
      <div className={style.projectsPage} id="portfolioContainer">
        <div className={style.circleContainer}>
          <img src={images.projectsProjectCircle} />
        </div>
        <Header as={'h1'} className={style.projectsLabel}>{getLocalizedString("PROJECTS_PROJECTS_LABEL")}</Header>
        <motion.div
          className={`${style.divCon} ${activeLabel === "mobileAppsProjLabel" ||
            activeLabel === "websiteProjLabel" ||
            activeLabel === "contentManagementProjLabel"
            ? style.active
            : ""
            }`}
          variants={getFirstAnimationVariant()}
          animate={
            activeLabel === "mobileAppsProjLabel" ||
              activeLabel === "websiteProjLabel" ||
              activeLabel === "contentManagementProjLabel"
              ? "active"
              : "inactive"
          }
          transition={{ type: "tween", duration: 1 }}
        >
          {
            PROJECTS_MOTION_DIV(motionDivProps).map((item, index) => {

              let {
                handleCarouselClick,
                active,
                initial,
                animate,
                label,
                image,
                subActive,
                subAnimate,
                activeProjectCarousel
              } = item;

              return (
                <>
                  <motion.div
                    key={index}
                    onClick={handleCarouselClick}
                    className={[style.glassContainer, active].join(" ")}
                    variants={moveLabelContainer}
                    initial={initial}
                    animate={animate}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className={style.projectLabel}>{label}</div>
                    <div>
                      <img src={image} />
                    </div>
                    <motion.div
                      className={[style.redLine, subActive].join(" ")}
                      variants={opacity}
                      animate={subAnimate}
                      transition={{ type: "tween", duration: 0.5 }}
                    ></motion.div>
                  </motion.div>
                  {activeProjectCarousel && (
                    <Carousel
                      showThumbs={false}
                      infiniteLoop="true"
                      showStatus={false}
                      className={style.projectCarousel}
                      renderArrowPrev={(clickHandler, hasPrev) => {
                        return (
                          <div
                            className={`${hasPrev ? "absolute" : "hidden"} ${style.arrowPrevMobileButton
                              }`}
                            onClick={clickHandler}
                          >
                            <img src={images.projectsArrowPreview} />
                          </div>
                        );
                      }}
                      renderArrowNext={(clickHandler, hasNext) => {
                        return (
                          <div
                            className={`${hasNext ? "absolute" : "hidden"} ${style.arrowNextMobileButton
                              }`}
                            onClick={clickHandler}
                          >
                            <img src={images.projectsArrowNext} />
                          </div>
                        );
                      }}
                    >
                      {
                        activeArray.map((item, index) => {

                          let {
                            projectImage,
                            projectName,
                            projectDetails,
                            country,
                            platforms
                          } = item;

                          return (
                            <div className={style.slideContainer} key={index}>
                              <div className={style.imageContainer}>
                                <img src={projectImage} />
                              </div>
                              <div className={style.mobileProjectLabel}>
                                {projectName}
                              </div>
                              <div className={style.mobileProjectDetail}>
                                {projectDetails}
                              </div>
                              <div className={style.mobileProjectCountry}>
                                {getLocalizedString("PROJECTS_COUNTRY_LABEL")}<span>{country}</span>
                              </div>
                              <div className={style.mobileProjectType}>
                                {getLocalizedString("PROJECTS_PLATFORMS_LABEL")}<span>{platforms}</span>
                              </div>
                            </div>
                          )
                        })
                      }
                    </Carousel>
                  )}
                </>
              )
            })
          }
        </motion.div>
        <DesktopCarousel {...desktopCorouselProps} />

      </div>
    </>
  );
};

export default NewProjects;
