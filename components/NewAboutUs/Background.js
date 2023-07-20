import React from "react";
import styles from "styles/main.module.scss";
import Image from "next/image";

function Background() {
  return (
    <div className={styles.aboutPageMobileCircleBackground}>
      <div className={styles.circleImageWrapper}>
        <div className={styles.circle}>
          <Image
            src="/static/newAboutUs-page/Group 1903-half.png"
            layout="fill"
          />
        </div>
        <div className={styles.circle}>
          <Image
            src="/static/newAboutUs-page/Group 2067-half.png"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Background;
