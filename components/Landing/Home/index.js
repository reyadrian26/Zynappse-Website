/** LIBRARIES */
import dynamic from "next/dynamic";
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";

const Content = dynamic(() => import("./Content"));

/** STYLES */
import style from "styles/main.module.scss";

const Home = () => {
  return (
    <div className={style.landingPage}>
      {/* <div className={style.landingBody}>
        <Image
          src={images.zynappseLandingBackground}
          width={1920}
          height={1080}
          layout="fill"
        />
      </div> */}
      <div className={style.logoContainer}>
          <img src={images.zynappseLogo} />
        </div>
      {/* <div className={style.logoContainer}>
        <Image
          className={style.zynappseLogo}
          src={images.zynappseLogo}
          width={1920}
          height={1080}
        />
      </div> */}
      <Content />
    </div>
  );
};

export default Home;
