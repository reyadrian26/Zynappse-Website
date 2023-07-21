/** LIBRARIES */
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

/** COMPONENTS */
import { images } from "components/assets";
import { getLocalizedString } from "strings";

/** SEMANTIC */
const Header = dynamic(() => import("semantic-ui-react").then(({ Header }) => Header));

/** STYLES */
import style from "styles/main.module.scss";

/*Import Animation Variants*/
import {
  moveLabel,
  opacity,
  up,
} from "./AnimationVariants";

/** CONSTANTS */
import {
  SERVICES_DATA,
  SERVICES_MOTION_DIV
} from "components/constants";

const Services = () => {
  const [activeLabel, setActiveLabel] = useState("mobileApps");
  const [getData, setGetData] = useState("mobileApps01");

  // setActiveLabel equals to NULL when the screen size is <= 899
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 899) {
        setActiveLabel(null);
      } else {
        setActiveLabel("mobileApps");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setGetData("");
    setTimeout(() => {
      setGetData(
        activeLabel === "mobileApps"
          ? "mobileApps01"
          : "" || activeLabel === "webEcommerce"
            ? "webEcommerce02"
            : "" || activeLabel === "cloudDatabaseManagement"
              ? "cloudDatabaseManagement03"
              : "" || activeLabel === "artificialIntelligence"
                ? "artificialIntelligence04"
                : "" || activeLabel === "augmentedReality"
                  ? "augmentedReality05"
                  : ""
      );
    }, 0);
  }, [activeLabel]);

  let motionDivProps = {
    activeLabel,
    setActiveLabel,
    setGetData
  }

  return (
    <div id="servicesContainer" className={style.servicesPage}>
      <Header as={'h1'} className={style.ourServicesLabel}>{getLocalizedString("SERVICES_OUR_SERVICES_LABEL")}</Header>
      <div className={style.glassContainer}>

        {
          SERVICES_MOTION_DIV(motionDivProps).map((item, index) => {

            let {
              active,
              handleClick,
              initial,
              mainAnimate,
              subAnimate,
              mainLabel,
              subLabel
            } = item;

            return (
              <motion.div
                key={index}
                className={[style.glassBox, active].join(" ")}
                onClick={handleClick}
                variants={moveLabel}
                initial={initial}
                animate={mainAnimate}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <motion.div
                  className={[style.redLine, active].join(" ")}
                  variants={opacity}
                  animate={subAnimate}
                  transition={{ type: "tween", duration: 0.5 }}
                ></motion.div>
                <div className={style.whiteWord}>
                  {mainLabel}
                  <span className={style.redWord}>{subLabel}</span>
                </div>
              </motion.div>
            )
          })
        }

      </div>
      <div className={style.redCircleContainer}>
        <img src={images.servicesRedCircleImage} />
      </div>
      <div className={style.dotsContainer}>
        <img src={images.servicesDotsImage} />
      </div>
      <div className={style.outerCircle}></div>
      <div className={style.innerCircle}></div>

      {SERVICES_DATA.map(({ id, count, image }) => {
        return (
          <div key={id}>
            {getData === id ? (
              <>
                <motion.div
                  key={image}
                  variants={up}
                  initial="before"
                  animate="after"
                  transition={{ type: "tween", duration: 1 }}
                  className={style.mobileImageContainer}
                >
                  <Image src={image} layout="fill" objectFit="contain" />
                </motion.div>
                <div className={style.firstCounter}>
                  {getLocalizedString("SERVICES_ZERO_LABEL")}
                  <motion.span
                    key={count}
                    variants={up}
                    initial="before"
                    animate="after"
                    transition={{ type: "tween", duration: 1 }}
                    className={style.redNumber}
                  >
                    {count}
                  </motion.span>
                </div>
                <div className={style.secondCounter}>{getLocalizedString("SERVICES_ZERO_FIVE_LABEL")}</div>
                <div className={style.counterLine}></div>
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Services;
