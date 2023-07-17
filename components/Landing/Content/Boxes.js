/** LIBRARIES */
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";
import { getLocalizedString } from "strings";

/** STYLES */
import style from "styles/main.module.scss";

function Boxes() {
  return (
    <div className={style.grid_container}>
      <div className={style.box_item1}>
        <h1>{getLocalizedString("LANDING_OUR_SERVICES_LABEL")}</h1>
        <div className={style.icon1}>
          <Image
            className={style.our_services_icon}
            src={images.zynappseServicesIcon}
            height={52}
            width={52}
          />
        </div>
      </div>
      <div className={style.box_item2}>
        <h1>{getLocalizedString("LANDING_ABOUT_US_LABEL")}</h1>
        <div className={style.icon2}>
          <Image
            className={style.about_us_icon}
            src={images.zynappseAboutIcon}
            height={53}
            width={54}
          />
        </div>
      </div>
      <div className={style.box_item3}>
        <h1>{getLocalizedString("LANDING_PROJECTS_LABEL")}</h1>
        <div className={style.icon3}>
          <Image
            className={style.projects_icon}
            src={images.zynappseProjectIcon}
            height={43}
            width={52}
          />
        </div>
      </div>
      <div className={style.box_item4}>
        <h1>{getLocalizedString("LANDING_ACCOMPLISHMENT_LABEL")}</h1>
        <div className={style.icon4}>
          <Image
            className={style.accomplishments_icon}
            src={images.zynappseAccomplismentIcon}
            height={53}
            width={47}
          />
        </div>
      </div>
      <div className={style.box_item5}>
        <h1>{getLocalizedString("LANDING_CONTACT_US_LABEL")}</h1>
        <div className={style.icon5}>
          <Image
            className={style.contact_us_icon}
            src={images.zynappseContactIcon}
            height={58}
            width={70}
          />
        </div>
      </div>
    </div>
  );
}

export default Boxes;
