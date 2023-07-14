/** COMPONENTS */
import { getLocalizedString } from "strings";

import Image from 'next/image'

//* STYLES *//
import styles from "styles/main.module.scss";

const Ios = () => {
  return ( 
    <>
      <div className={styles.iosImg}>
        <Image
          src="/static/images/iphone.png"
          alt="Iphone.jpg"
          width={550}
          height={708}
        />
      </div>
      <hr className={styles.iosLine} />
      <h3 className={styles.iosTime}>{getLocalizedString("TIME")}</h3>
      <h3 className={styles.iosDate}>{getLocalizedString("DATE")}</h3>
    </>
  );
}
 
export default Ios;