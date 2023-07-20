import React from "react";
import styles from "styles/main.module.scss";
import Image from "next/image";
import {images} from "components/assets"

function Background() {
  return (
    <div className={styles.aboutPageMobileCircleBackground}>
      <div className={styles.circleImageWrapper}>
        <div className={styles.circle}>
          <Image
            src= {images.aboutUsLeftCircleImage}
            layout="fill"
          />
        </div>
        <div className={styles.circle}>
          <Image
            src= {images.aboutUsRightCircleImage}
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Background;
