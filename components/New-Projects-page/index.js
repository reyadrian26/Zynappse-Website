import styles from "styles/main.module.scss";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { CarouselItems } from "./CarouselItems";
import { motion } from "framer-motion";
/*   Import Array of Data   */
import {
  mobileAppsProjects,
  websiteProjects,
  contentManagementProjects,
} from "./ArrayofData";

/*   Import Animation Variants  */
import {
  moveContainer,
  moveLabelContainer,
  fadeIn,
  opacity,
} from "./AnimationVariants";

const NewProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeArray, setActiveArray] = useState(mobileAppsProjects);
  const [activeLabel, setActiveLabel] = useState();
  const [activeCarousel, setActiveCarousel] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const updateIndex = (newIndex) => {
    const lastIndex = activeArray.length - 1;
    if (newIndex < 0) {
      newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      newIndex = 0;
    }

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
    const isLargeScreen = window.innerWidth > 899;

    setActiveLabel(isLargeScreen ? label : "");
    setIsButtonClicked(!isLargeScreen);
    setActiveCarousel(label);

    if (label === "mobileAppsProjLabel") {
      handleButtonClick(mobileAppsProjects);
    } else if (label === "websiteProjLabel") {
      handleButtonClick(websiteProjects);
    } else {
      handleButtonClick(contentManagementProjects);
    }
  };

  const getAnimationVariant = () => {
    if (activeLabel === "mobileAppsProjLabel") {
      return moveContainer;
    } else if (activeLabel === "websiteProjLabel") {
      return moveContainer;
    } else {
      return moveContainer;
    }
  };

  const getAnimationVariant2 = () => {
    if (activeLabel === "mobileAppsProjLabel") {
      return fadeIn;
    } else if (activeLabel === "websiteProjLabel") {
      return fadeIn;
    } else {
      return fadeIn;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 899) {
        setActiveLabel(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.NewProjectsContainer} id="portfolioContainer">
        <div className={styles.ProjectsLabel}>PROJECTS</div>
        <motion.div
          className={`${styles.DivCon} ${
            activeLabel === "mobileAppsProjLabel" ||
            activeLabel === "websiteProjLabel" ||
            activeLabel === "contentManagementProjLabel"
              ? styles.active
              : ""
          }`}
          variants={getAnimationVariant()}
          animate={
            activeLabel === "mobileAppsProjLabel" ||
            activeLabel === "websiteProjLabel" ||
            activeLabel === "contentManagementProjLabel"
              ? "active"
              : "inactive"
          }
          transition={{ type: "tween", duration: 1 }}
        >
          <motion.div
            onClick={() => {
              handleClick("mobileAppsProjLabel");
            }}
            className={`${styles.GlassContainer} ${
              activeLabel === "mobileAppsProjLabel" ? styles.active : ""
            }`}
            variants={moveLabelContainer}
            initial={
              activeLabel === "mobileAppsProjLabel" ? "active" : "active"
            }
            animate={
              activeLabel === "mobileAppsProjLabel" ? "active" : "inactive"
            }
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className={styles.MobileLabel}>MOBILE APPS</div>
            <div>
              <img src="/NewProjects/MobileIcon.svg" />
            </div>
            <motion.div
              className={`${styles.RedLine} ${
                activeLabel === "mobileAppsProjLabel" ? styles.active : ""
              }`}
              variants={opacity}
              animate={
                activeLabel === "mobileAppsProjLabel" ||
                (activeCarousel === "mobileAppsProjLabel" &&
                  window.innerWidth <= 899 &&
                  isButtonClicked)
                  ? "after"
                  : "before"
              }
              transition={{ type: "tween", duration: 0.5 }}
            ></motion.div>
          </motion.div>
          {isButtonClicked && activeCarousel === "mobileAppsProjLabel" && (
            <Carousel
              showThumbs={false}
              infiniteLoop="true"
              showStatus={false}
              className={styles.MobileCarousel}
              renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                  <div
                    className={`${hasPrev ? "absolute" : "hidden"} ${
                      styles.ArrowPrevMobileButton
                    }`}
                    onClick={clickHandler}
                  >
                    <img src="/NewProjects/arrowPreview.png" />
                  </div>
                );
              }}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                  <div
                    className={`${hasNext ? "absolute" : "hidden"} ${
                      styles.ArrowNextMobileButton
                    }`}
                    onClick={clickHandler}
                  >
                    <img src="/NewProjects/arrowNext.png" />
                  </div>
                );
              }}
            >
              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/RobinsonsMallAppImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Robinsons Mall App
                </div>
                <div className={styles.MobileDetail}>
                  Everything you need to know about Robinsons Malls is now at
                  your fngertips— store directory, events and promos, Robinsons
                  Privilege Card discounts and benefts, Lingkod Pinoy directory,
                  movie schedules and mall directions and operating hours.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/ResortsWorldImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Resorts World Manila Mobile App Companion
                </div>
                <div className={styles.MobileDetail}>
                  Find it difficult to keep up with all that Resorts World
                  Manila has to offer? Stay up-to-date with the RWM Mobile App,
                  the best way to make the most out of every trip to the
                  Philippines’ First Integrated Resort!
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android and IOS)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/MetroDealImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>Metro Deal App</div>
                <div className={styles.MobileDetail}>
                  Welcome to the world of MetroDeal: Unbeatable offers with
                  discounts up to 90% for restaurants, buffets, spas, hotels,
                  gadgets and more await you. Every day, we introduce exciting
                  new deals with deep discounts for things to do in your city.
                  Download the MetroDeal app to browse endless offers, tailored
                  to your preferences. Fancy a mouthwatering buffet, a new
                  hair-do, or a workout at the gym? Our deals help you discover
                  your city for less.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android and IOS)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/OurAwesomePlanetImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Our Awesome Planet Mobile App
                </div>
                <div className={styles.MobileDetail}>
                  The Our Awesome Planet App is your personal travel guide to
                  the most awesome food and travel experiences in the
                  Philippines. Know the best restaurants, best places, and best
                  travel experiences in the Philippines as curated by Anton
                  Diaz, founder of the top food & travel blog in the Philippines
                  and ASEAN since 2005. Get updated with the hidden experiences
                  only a local insider can provide. It’s your one stop guide to
                  Awesome Philippines.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android and IOS)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/FlashHuntImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Flash Hunt Mobile App
                </div>
                <div className={styles.MobileDetail}>
                  A mobile scavenger hunt app that engages its users in physical
                  tasks and the excitement of Augmented Reality! Made even more
                  interactive with its in-app sharing of user’s experience to
                  their Social Media accounts. This app makes use of the latest
                  digital solutions to deliver a relevant and truly rewarding
                  experience!
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/AmellarZoningMonitoringImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Amellar Zoning and Monitoring
                </div>
                <div className={styles.MobileDetail}>
                  aZMAS Android Edition is a mobile app that shall be deployed
                  for fieldwork activities such as tagging for landmarks,
                  establishments and other structures that maybe essential for
                  zoning administration. This mobile app is an online-ready app
                  that can automatically sync data into its cloud-base server
                  and database. This means that all information gathered in the
                  field will automatically be sent and saved into the main
                  server in our Cloud Facility. In effect, users inside the City
                  Hall shall automatically receive updates real-time. Thus, the
                  local executive as well as the local managers shall receive
                  updated reports anytime of the day.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/MyBloodImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Myblood profile Mobile App
                </div>
                <div className={styles.MobileDetail}>
                  My Blood is a healthy lifestyle app that graphically presents
                  and tracks your lab results. It gives health recommendations
                  based on your calculated risk of developing lifestyle
                  diseases. This app is only available for use on select tests
                  from partner laboratories
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android and IOS)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/UnfoldImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Unfold Mobile App
                </div>
                <div className={styles.MobileDetail}>
                  Unfold is an app that makes Master Choa Kok Sui’s teachings
                  more modern and accessible than ever before. The app allows
                  users to receive daily nuggets of inspiration from his
                  teachings and also allows them to personalize the quotes
                  through various fonts, backgrounds, and stickers. Users can
                  then share these personalized quotes through popular social
                  media accounts such as Facebook, Twitter, Instagram, and
                  Pinterest.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android and IOS)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/EShuttleImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>E-Shuttle</div>
                <div className={styles.MobileDetail}>
                  A mobile app designed and developed for finding the nearest
                  and available e-tricycle within a specific vicinity or city.
                  With the most advanced and real-time and online dashboard to
                  monitor trips and transactions. The apps was designed and
                  developed for both drivers and passengers to create a cohesive
                  ecosystem across users.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/FoozeImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>Fooze</div>
                <div className={styles.MobileDetail}>
                  The fastest and easiest way to satisfy your late night
                  cravings. Fooze is the 1-tap delivery app for your favorite
                  late night munchies. Every night, we feature a different
                  selection of three delicious munchies from great late night
                  restaurants. Simply choose your munchie, and tap to order. Our
                  meals are always a convenient all-inclusive price.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/RBXImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  RBX Integrated Solution
                </div>
                <div className={styles.MobileDetail}>
                  The RBX INTEGRATED SOLUTION (RBXIS) is an enterprise-wide
                  solution designed for Rice In A Box (RBX) for the monitoring
                  and management of all their daily sales and purchase order
                  reports from different outlets/branches (RBX-owned and/or
                  franchises). The RBXIS consists of web, mobile and cloud
                  solutions that handle and manage all branch transactions from
                  purchasing to sales, which are consolidated to daily and
                  executive reports for an effective and efficient management
                  decision-making.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/LifeKonnektImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Life Konnekt Mobile App
                </div>
                <div className={styles.MobileDetail}>
                  LifeKonnekt helps you chronicle your thoughts, feelings, ideas
                  and experiences and allows you to share them with the people
                  who really matter to you.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android)</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/BusinessTaggingImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Business Tagging
                </div>
                <div className={styles.MobileDetail}>
                  Business Tagging for Android is a mobile application
                  specifically designed for Local Government Units in the
                  Philippines. This app is a customized business tagging
                  solution for Android and iOS tailor-fitted to adapt to the
                  current requirements of most of the local government units in
                  the country.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Mobile (Android)</span>
                </div>
              </div>
            </Carousel>
          )}

          <motion.div
            onClick={() => {
              handleClick("websiteProjLabel");
            }}
            className={`${styles.GlassContainer} ${
              activeLabel === "websiteProjLabel" ? styles.active : ""
            }`}
            variants={moveLabelContainer}
            initial={activeLabel === "websiteProjLabel" ? "active" : "active"}
            animate={activeLabel === "websiteProjLabel" ? "active" : "inactive"}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className={styles.WebsiteLabel}>WEBSITES</div>
            <div>
              <img src="/NewProjects/WebsiteIcon.svg" />
            </div>
            <motion.div
              className={`${styles.RedLine} ${
                activeLabel === "websiteProjLabel" ? styles.active : ""
              }`}
              variants={opacity}
              animate={
                activeLabel === "websiteProjLabel" ||
                (activeCarousel === "websiteProjLabel" &&
                  window.innerWidth <= 899 &&
                  isButtonClicked)
                  ? "after"
                  : "before"
              }
              transition={{ type: "tween", duration: 0.5 }}
            ></motion.div>
          </motion.div>
          {isButtonClicked && activeCarousel === "websiteProjLabel" && (
            <Carousel
              showThumbs={false}
              infiniteLoop="true"
              showStatus={false}
              className={styles.MobileCarousel}
              renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                  <div
                    className={`${hasPrev ? "absolute" : "hidden"} ${
                      styles.ArrowPrevMobileButton
                    }`}
                    onClick={clickHandler}
                  >
                    <img src="/NewProjects/arrowPreview.png" />
                  </div>
                );
              }}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                  <div
                    className={`${hasNext ? "absolute" : "hidden"} ${
                      styles.ArrowNextMobileButton
                    }`}
                    onClick={clickHandler}
                  >
                    <img src="/NewProjects/arrowNext.png" />
                  </div>
                );
              }}
            >
              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/Sarimoiremage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>Sarimoire</div>
                <div className={styles.MobileDetail}>
                  A place for all things natural, magical, and spiritually
                  uplifting. Sarimoire’s Philosophy: At Sarimoire we believe
                  that everyone deserves the magic and divinity that exists
                  within us and in our surroundings. The elements and seasons
                  are gifts that we treasure and hold to the highest esteem.
                  Traditionally, throughout all cultures, herbs, resins, and
                  healing stones have been used to further connect us with the
                  elements. T his connection is a path that leads to deep
                  enlightenment, understanding and overall alignment with our
                  higher self. To work with these gifts from nature is like a
                  world history course, learning about all the different
                  cultures throughout human history.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Website</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/ZygurtechImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>Zygurtech</div>
                <div className={styles.MobileDetail}>
                  US-Based IT company that provides web solutions, mobile and
                  wearable apps, cloud and database services.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>US</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Website</span>
                </div>
              </div>

              <div className={styles.SlideContainer}>
                <div className={styles.ImageContainer}>
                  <img src="/NewProjects/NoahCourierServicesImage.png" />
                </div>
                <div className={styles.MobileProjectLabel}>
                  Noah Courier Services
                </div>
                <div className={styles.MobileDetail}>
                  N.O.A.H. courier service was established in the year 2020 of
                  August 01. It is formally known as N.O.A.H. Courier Service
                  Ngayon Orders Agad-Agad Hatid. We are a technology-based
                  courier company that applies highly advanced IT management
                  system to provide high efficiency, security, quality and
                  excellent service to all Merchants and Consignee.
                </div>
                <div className={styles.MobileCountry}>
                  Country:<span>Philippines</span>
                </div>
                <div className={styles.MobileType}>
                  Platforms:<span>Website</span>
                </div>
              </div>
            </Carousel>
          )}
          <motion.div
            onClick={() => {
              handleClick("contentManagementProjLabel");
            }}
            className={`${styles.GlassContainer} ${
              activeLabel === "contentManagementProjLabel" ? styles.active : ""
            }`}
            variants={moveLabelContainer}
            initial={
              activeLabel === "contentManagementProjLabel" ? "active" : "active"
            }
            animate={
              activeLabel === "contentManagementProjLabel"
                ? "active"
                : "inactive"
            }
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className={styles.ContentLabel}>CONTENT MANAGEMENT APP</div>
            <div>
              <img src="/NewProjects/ContentIcon.svg" />
            </div>
            <motion.div
              className={`${styles.RedLine} ${
                activeLabel === "contentManagementProjLabel"
                  ? styles.active
                  : ""
              }`}
              variants={opacity}
              animate={
                activeLabel === "contentManagementProjLabel" ||
                (activeCarousel === "contentManagementProjLabel" &&
                  window.innerWidth <= 899 &&
                  isButtonClicked)
                  ? "after"
                  : "before"
              }
              transition={{ type: "tween", duration: 0.5 }}
            ></motion.div>
          </motion.div>

          {isButtonClicked &&
            activeCarousel === "contentManagementProjLabel" && (
              <Carousel
                showThumbs={false}
                infiniteLoop="true"
                showStatus={false}
                className={styles.MobileCarousel}
                renderArrowPrev={(clickHandler, hasPrev) => {
                  return (
                    <div
                      className={`${hasPrev ? "absolute" : "hidden"} ${
                        styles.ArrowPrevMobileButton
                      }`}
                      onClick={clickHandler}
                    >
                      <img src="/NewProjects/arrowPreview.png" />
                    </div>
                  );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                  return (
                    <div
                      className={`${hasNext ? "absolute" : "hidden"} ${
                        styles.ArrowNextMobileButton
                      }`}
                      onClick={clickHandler}
                    >
                      <img src="/NewProjects/arrowNext.png" />
                    </div>
                  );
                }}
              >
                <div className={styles.SlideContainer}>
                  <div className={styles.ImageContainer}>
                    <img src="/NewProjects/AlaskaAcesImage.png" />
                  </div>
                  <div className={styles.MobileProjectLabel}>
                    Alaska Aces Mobile App and Alaska Aces Official Website
                  </div>
                  <div className={styles.MobileDetail}>
                    The Official Alaska Aces PBA Basketball Team iPhone App.
                    Stay connected to the Alaska Aces everywhere you go. Get
                    Alaska Aces news, player profiles, schedules and more. Be
                    updated with Alaska Aces’ latest events, standings and news.
                  </div>
                  <div className={styles.MobileCountry}>
                    Country:<span>Philippines</span>
                  </div>
                  <div className={styles.MobileType}>
                    Platforms:<span>Mobile (Android and IOS) and Website</span>
                  </div>
                </div>

                <div className={styles.SlideContainer}>
                  <div className={styles.ImageContainer}>
                    <img src="/NewProjects/JobStreamImage.png" />
                  </div>
                  <div className={styles.MobileProjectLabel}>Jobstream</div>
                  <div className={styles.MobileDetail}>
                    Whether you’re a Jobseeker, Volunteer, an Employer or
                    Non-Profit organization, the JobStream App makes it easier
                    than ever to establish powerful, long-lasting relationships
                    in the workplace. We are committed in using the latest
                    technology available to assist in finding job opportunities
                    near you or hiring qualified talents made QUICK & EASY
                    through JobStream App.
                  </div>
                  <div className={styles.MobileCountry}>
                    Country:<span>US</span>
                  </div>
                  <div className={styles.MobileType}>
                    Platforms:<span>Mobile (Android and IOS) and Website</span>
                  </div>
                </div>

                <div className={styles.SlideContainer}>
                  <div className={styles.ImageContainer}>
                    <img src="/NewProjects/AlfamartImage.png" />
                  </div>
                  <div className={styles.MobileProjectLabel}>Alfamart</div>
                  <div className={styles.MobileDetail}>
                    Zynappse Store Audit for Alfamart is a solution designed
                    specifically for stores with multiple branches such as
                    Alfamart. This is a combination of cloud and mobile
                    applications that has evolved into acomprehensive,
                    all-in-one solution for direct-store audit system for
                    auditors, area managers and supervisors to move forward and
                    grow smarter.
                  </div>
                  <div className={styles.MobileCountry}>
                    Country:<span>Philippines</span>
                  </div>
                  <div className={styles.MobileType}>
                    Platforms:<span>Mobile (Android), Website and CMS</span>
                  </div>
                </div>

                <div className={styles.SlideContainer}>
                  <div className={styles.ImageContainer}>
                    <img src="/NewProjects/GessaImage.png" />
                  </div>
                  <div className={styles.MobileProjectLabel}>
                    GESSA - Gender Equality Staff Survey
                  </div>
                  <div className={styles.MobileDetail}>
                    Gender Equality Staff Survey Application (GESSA) is a survey
                    administration app that creates surveys and questionnaires
                    online to collect and organize information. It’s the perfect
                    solution for capturing employee perception around Workplace
                    Gender Equality (WGE), understanding inclusiveness of
                    company culture and opportunities for research and
                    development. Unlimited surveys can be created to assess WGE
                    events, initiatives, opinion and more.
                  </div>
                  <div className={styles.MobileCountry}>
                    Country:<span>Philippines</span>
                  </div>
                  <div className={styles.MobileType}>
                    Platforms:<span>Mobile (Android), Website and CMS</span>
                  </div>
                </div>

                <div className={styles.SlideContainer}>
                  <div className={styles.ImageContainer}>
                    <img src="/NewProjects/ExactTrainingCenterImage.png" />
                  </div>
                  <div className={styles.MobileProjectLabel}>
                    Exact Training Center
                  </div>
                  <div className={styles.MobileDetail}>
                    There is no gainsaying the fact that the international
                    maritime community holds the Filipino mariner in the highest
                    esteem not only for his adaptability, communications skills
                    and natural talent but also for his indomitable spirit that
                    often makes him the most dependable person on- board ship;
                    attributes that are often challenged by the need for a more
                    professional finish to his hands-on training. We are pleased
                    to announce that EXACT Center, Inc. has dedicated itself in
                    raising the bar of maritime excellence and competence. This
                    is not, however, by all means, the end of it. More like the
                    beginning.
                  </div>
                  <div className={styles.MobileCountry}>
                    Country:<span>Philippines</span>
                  </div>
                  <div className={styles.MobileType}>
                    Platforms:<span>Website and CMS</span>
                  </div>
                </div>
              </Carousel>
            )}
        </motion.div>

        <div className={styles.CircleContainer}>
          <img src="/NewProjects/ProjectCircle.svg" />
        </div>

        <motion.div
          className={`${styles.CarouselContainer} ${
            activeLabel === "mobileAppsProjLabel" ||
            activeLabel === "websiteProjLabel" ||
            activeLabel === "contentManagementProjLabel"
              ? styles.active
              : ""
          }`}
          variants={getAnimationVariant2()}
          animate={
            activeLabel === "mobileAppsProjLabel" ||
            activeLabel === "websiteProjLabel" ||
            activeLabel === "contentManagementProjLabel"
              ? "active"
              : "inactive"
          }
          transition={{ type: "tween", duration: 1 }}
        >
          <div
            className={styles.Inner}
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            {activeArray.map((item) => {
              return (
                <CarouselItems
                  item={item}
                  width={"100%"}
                  key={item.projectID}
                />
              );
            })}
          </div>

          <div className={styles.CarouselButtons}>
            <div className={styles.Indicators}>
              {activeArray.map((item, index) => {
                return (
                  <button
                    className={styles.indicatorButtons}
                    onClick={() => {
                      updateIndex(index);
                    }}
                    key={item.projectID}
                  >
                    <input
                      key={item.projectID}
                      type="radio"
                      className={styles.IndicatorActive}
                      checked={index === activeIndex}
                      onChange={() => {
                        updateIndex(index);
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NewProjects;
