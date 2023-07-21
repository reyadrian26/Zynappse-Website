/** LIBRARIES */
import dynamic from "next/dynamic";
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";
import { getLocalizedString } from "strings";

/** STYLES */
import style from "styles/main.module.scss";

const Android = () => {
    return ( 
        <div>
            <div className={style.androidImg}>
                <Image
                    src={images.skillsAndroidIcon}
                    alt="android"
                    width={950}
                    height={950}
                />
            </div>
            <h3 className={style.androidTime}>{getLocalizedString("TIME")}</h3>
            <h3 className={style.androidDate}>{getLocalizedString("DATE")}</h3>
        </div>
    );
}
 
export default Android;