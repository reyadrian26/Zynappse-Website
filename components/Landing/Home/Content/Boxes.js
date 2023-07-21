/** LIBRARIES */
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";
import { getLocalizedString } from "strings";

/** STYLES */
import style from "styles/main.module.scss";

function Boxes() {
  return (
    <div className={style.gridContainer}>
      <div className={style.servicesBoxItem}>
        <h1>{getLocalizedString("LANDING_OUR_SERVICES_LABEL")}</h1>
        <div className={style.servicesIconWrapper}>
          <Image
            className={style.servicesIcon}
            src={images.zynappseServicesIcon}
            height={50}
            width={50}
          />
        </div>
      </div>
      <div className={style.aboutUsBoxItem}>
        <h1>{getLocalizedString("LANDING_ABOUT_US_LABEL")}</h1>
        <div className={style.aboutUsIconWrapper}>
          <Image
            className={style.aboutUsIcon}
            src={images.zynappseAboutIcon}
            height={50}
            width={50}
          />
        </div>
      </div>
      <div className={style.projectsBoxItem}>
        <h1>{getLocalizedString("LANDING_PROJECTS_LABEL")}</h1>
        <div className={style.projectsIconWrapper}>
          <Image
            className={style.projectsIcon}
            src={images.zynappseProjectIcon}
            height={50}
            width={50}
          />
        </div>
      </div>
      <div className={style.accomplismentBoxItem}>
        <h1>{getLocalizedString("LANDING_ACCOMPLISHMENT_LABEL")}</h1>
        <div className={style.accomplismentIconWrapper}>
          <Image
            className={style.accomplismentIcon}
            src={images.zynappseAccomplismentIcon}
            height={50}
            width={50}
          />
        </div>
      </div>
      <div className={style.contactBoxItem}>
        <h1>{getLocalizedString("LANDING_CONTACT_US_LABEL")}</h1>
        <div className={style.contactIconWrapper}>
          <Image
            className={style.contactIcon}
            src={images.zynappseContactIcon}
            height={50}
            width={55}
          />
        </div>
      </div>
    </div>
  );
}

export default Boxes;
