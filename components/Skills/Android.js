import { getLocalizedString } from "strings";
import Image from 'next/image'

//* STYLES *//
import styles from "styles/main.module.scss";

const Android = () => {
    return ( 
        <div>
            <div className={styles.androidImg}>
                <Image
                    src="/static/images/android.png"
                    alt="Android.jpg"
                    width={950}
                    height={950}
                />
            </div>
            <h3 className={styles.androidTime}>{getLocalizedString("TIME")}</h3>
            <h3 className={styles.androidDate}>{getLocalizedString("DATE")}</h3>
        </div>
    );
}
 
export default Android;