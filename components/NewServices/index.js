import styles from "styles/main.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

/*Import Animation Variants*/
import {
  moveLabel,
  opacity,
  up,
} from "./AnimationVariants";

/*Import Data*/
import { data } from "./ArrayofData";

const NewServices = () => {
  const [activeLabel, setActiveLabel] = useState("mobileApps");
  const [getData, setGetData] = useState("mobileApps01");
  const handleClick = (label) => {
    setActiveLabel(label);
  };

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

  return (
    <div className={styles.NewServicesContainer}>
      <div className={styles.OurServicesLabel}>OUR SERVICES</div>
      <div className={styles.GlassContainer}>
        <motion.div
          className={`${styles.GlassBox} ${activeLabel === "mobileApps" ? styles.active : ""
            }`}
          onClick={() => {
            handleClick("mobileApps");
            setGetData("mobileApps01");
          }}
          variants={moveLabel}
          initial={activeLabel === "mobileApps" ? "active" : "inactive"}
          animate={activeLabel === "mobileApps" ? "active" : "inactive"}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            className={`${styles.RedLine} ${activeLabel === "mobileApps" ? styles.active : ""
              }`}
            variants={opacity}
            animate={activeLabel === "mobileApps" ? "after" : "before"}
            transition={{ type: "tween", duration: 0.5 }}
          ></motion.div>
          <div className={styles.WhiteWord}>
            MOBILE <span className={styles.RedWord}>APPS</span>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.GlassBox} ${activeLabel === "webEcommerce" ? styles.active : ""
            }`}
          onClick={() => {
            handleClick("webEcommerce");
            setGetData("webEcommerce02");
          }}
          variants={moveLabel}
          animate={activeLabel === "webEcommerce" ? "active" : "inactive"}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            className={`${styles.RedLine} ${activeLabel === "webEcommerce" ? styles.active : ""
              }`}
            variants={opacity}
            animate={activeLabel === "webEcommerce" ? "after" : "before"}
            transition={{ type: "tween", duration: 0.5 }}
          ></motion.div>
          <div className={styles.WhiteWord}>
            WEB AND <span className={styles.RedWord}>ECOMMERCE</span>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.GlassBox} ${activeLabel === "cloudDatabaseManagement" ? styles.active : ""
            }`}
          onClick={() => {
            handleClick("cloudDatabaseManagement");
            setGetData("cloudDatabaseManagement03");
          }}
          variants={moveLabel}
          animate={
            activeLabel === "cloudDatabaseManagement" ? "active" : "inactive"
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            className={`${styles.RedLine} ${activeLabel === "cloudDatabaseManagement" ? styles.active : ""
              }`}
            variants={opacity}
            animate={
              activeLabel === "cloudDatabaseManagement" ? "after" : "before"
            }
            transition={{ type: "tween", duration: 0.5 }}
          ></motion.div>
          <div className={styles.WhiteWord}>
            CLOUD AND{" "}
            <span className={styles.RedWord}>DATABASE MANAGEMENT</span>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.GlassBox} ${activeLabel === "artificialIntelligence" ? styles.active : ""
            }`}
          onClick={() => {
            handleClick("artificialIntelligence");
            setGetData("artificialIntelligence04");
          }}
          variants={moveLabel}
          animate={
            activeLabel === "artificialIntelligence" ? "active" : "inactive"
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            className={`${styles.RedLine} ${activeLabel === "artificialIntelligence" ? styles.active : ""
              }`}
            variants={opacity}
            animate={
              activeLabel === "artificialIntelligence" ? "after" : "before"
            }
            transition={{ type: "tween", duration: 0.5 }}
          ></motion.div>
          <div className={styles.WhiteWord}>
            ARTIFICIAL <span className={styles.RedWord}>INTELLIGENCE</span>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.GlassBox} ${activeLabel === "augmentedReality" ? styles.active : ""
            }`}
          onClick={() => {
            handleClick("augmentedReality");
            setGetData("augmentedReality05");
          }}
          variants={moveLabel}
          animate={activeLabel === "augmentedReality" ? "active" : "inactive"}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            className={`${styles.RedLine} ${activeLabel === "augmentedReality" ? styles.active : ""
              }`}
            variants={opacity}
            animate={activeLabel === "augmentedReality" ? "after" : "before"}
            transition={{ type: "tween", duration: 0.5 }}
          >
          </motion.div>
          <div className={styles.WhiteWord}>
            AUGMENTED <span className={styles.RedWord}>REALITY</span>
          </div>
        </motion.div>

      </div>
      <div className={styles.RedCircleContainer}>
        <img src="/NewServices/ServicesRedCircle.png" />
      </div>
      <div className={styles.DotsContainer}>
        <img src="/NewServices/ServicesDots.png" />
      </div>
      <div className={styles.OuterCircle}></div>
      <div className={styles.InnerCircle}></div>

      {data.map(({ id, count, image }) => {
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
                  className={styles.MobileImageContainer}
                >
                  <Image src={image} layout="fill" objectFit="contain" />
                </motion.div>
                <div className={styles.FirstCounter}>
                  0
                  <motion.span
                    key={count}
                    variants={up}
                    initial="before"
                    animate="after"
                    transition={{ type: "tween", duration: 1 }}
                    className={styles.RedNumber}
                  >
                    {count}
                  </motion.span>
                </div>
                <div className={styles.SecondCounter}>05</div>
                <div className={styles.CounterLine}></div>
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default NewServices;
