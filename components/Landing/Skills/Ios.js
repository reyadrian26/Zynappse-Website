/** LIBRARIES */
import Image from "next/image";

/** COMPONENTS */
import { getLocalizedString } from "strings";
import { images } from "components/assets";

/** STYLES */
import style from "styles/main.module.scss";

const Ios = () => {
  return ( 
    <>
      <div className={style.iosImg}>
        <Image
          src={images.skillsIphoneIcon}
          alt="iphone"
          width={550}
          height={708}
        />
      </div>
      <hr className={style.iosLine} />
      <h3 className={style.iosTime}>{getLocalizedString("TIME")}</h3>
      <h3 className={style.iosDate}>{getLocalizedString("DATE")}</h3>
    </>
  );
}
 
export default Ios;