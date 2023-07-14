/** LIBRARIES */
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";

/** STYLES */
import style from "styles/main.module.scss";

function Boxes() {
  return (
    <div className={style.grid_container}>
      <div className={style.box_item1}>
        <h1>Our Services</h1>
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
        <h1>About Us</h1>
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
        <h1>Projects</h1>
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
        <h1>Accomplishments</h1>
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
        <h1>Contact Us</h1>
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
