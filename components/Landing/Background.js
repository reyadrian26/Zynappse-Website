/** LIBRARIES */
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";

/** STYLES */
import style from "styles/main.module.scss";

function Background() {
  return (
    <div className={style.landingBody}>
      <Image
        src={images.zynappseLandingBackground}
        width={1920}
        height={1080}
        layout="fill"
        // objectFit="contain"
      />
      <div className={style.logoContainer}>
        <Image
          className={style.zynappseLogo}
          src={images.zynappseLogo}
          width={1920}
          height={1193}
        />
      </div>
    </div>
  );
}

export default Background;
