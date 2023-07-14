import React from "react";
import styles from "styles/main.module.scss";
import Image from "next/image";

function Background() {
  return (
    <div className={styles.page2_body}>
      <div className={styles.page2_bg}>
        <Image
          src="/static/newAboutUs-page/Group 1891.png"
          width={1920}
          height={1080}
        />
        <div className={styles.circle1}>
          <Image
            src="/static/newAboutUs-page/Group 1903-half.png"
            width={657}
            height={1464}
          />
        </div>
        <div className={styles.circle2}>
          <Image
            src="/static/newAboutUs-page/Group 2067-half.png"
            width={657}
            height={1463}
          />
        </div>
      </div>
    </div>
  );
}

export default Background;
