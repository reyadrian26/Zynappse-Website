import React from "react";
import styles from "styles/main.module.scss";
import Image from "next/image";
import Background from "../Background";
import {getLocalizedString} from "strings"
import {images} from "components/assets"

function page2Content() {
  return (
    <div className={styles.aboutUsContent}>
      <Background />
      <div className={styles.aboutUsContentWrapper}>
        <div className={styles.aboutUsHeaderContainer}>
          <h3>{getLocalizedString("ABOUT_US_ABOUT_LABEL")} <span>{getLocalizedString("ABOUT_US_US_LABEL")}</span></h3>
          <h1>{getLocalizedString("ABOUT_US_MOTTO_TITLE")}</h1>
        </div>
        <div className={styles.phoneImage}>
          <Image
            src={images.aboutUsPhoneImage}
            layout="fill"
          />
        </div>
        <div className={styles.missionText}>
          <h4>{getLocalizedString("ABOUT_US_MISSION_TEXT_ONE")}</h4>
          <h4>{getLocalizedString("ABOUT_US_MISSION_TEXT_TWO")}</h4>
          <h2>{getLocalizedString("ABOUT_US_YEARS_OF_EXPERIENCE_LABEL")}</h2>
        </div>
      </div>
    </div>
  );
}

export default page2Content;
