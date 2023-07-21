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
      <div className={style.mainBackgroundTexture}>
        <Image
          src={images.genericTexturedBackground}
          layout="fill"
        />
      </div>
      <div className={style.logoContainer}>
        <img src={images.zynappseLogo} />
      </div>
      <Content />
    </div>
  );
};

export default Home;
