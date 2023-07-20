import styles from "styles/main.module.scss";
import Image from "next/image";
import {images} from "components/assets"
import {getLocalizedString} from "strings"

const ClockSection = () => {
  return (
    <div className={styles.clockSection}>
        <div className={styles.clockSectionBackground}>
            <div className={styles.leftClockImage}>
                <Image src={images.aboutUsLeftClockImage} layout="fill"/>
            </div>
            <div className={styles.rightClockImage}>
                <Image src={images.aboutUsRightClockImage} layout="fill"/>
            </div>
        </div>
        <div className={styles.clockSectionContent}>
            <h1>{getLocalizedString("ABOUT_US_AIMING_FOR_LABEL")}</h1>
            <div className={styles.clockSectionDescription}>
                <h4>{getLocalizedString("ABOUT_US_GOAL_TEXT")}</h4>
            </div>
            <div className={styles.glassContainer}>
                <h4>{getLocalizedString("ABOUT_US_EFFICIENCY_LABEL")}</h4>
                <p>{getLocalizedString("ABOUT_US_EFFICIENCY_DESCRIPTION_TEXT")}</p>
            </div>
            <div className={styles.glassContainer}>
                <h4>{getLocalizedString("ABOUT_US_QUALITY_LABEL")}</h4>
                <p>{getLocalizedString("ABOUT_US_QUALITY_DESCRIPTION_TEXT")}</p>
            </div>
            <div className={styles.glassContainer}>
                <h4>{getLocalizedString("ABOUT_US_EFFECTIVENESS_LABEL")}</h4>
                <p>{getLocalizedString("ABOUT_US_EFFECTIVENESS_DESCRIPTION_TEXT")}</p>
            </div>
        </div>
    </div>
  )
}

export default ClockSection