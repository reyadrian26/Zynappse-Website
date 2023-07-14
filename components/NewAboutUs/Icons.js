import React from "react";
import styles from "styles/main.module.scss";
import Image from "next/image";

function Icons() {
  return (
    <div className={styles.icons_container}>
      <div className={styles.contacts_fb}>
        <a href="#">
          <Image
            src="/static/newAboutUs-page/Group 1930.svg"
            height={71}
            width={71}
          />
        </a>
      </div>
      <div className={styles.contacts_phone}>
        <a href="#">
          <Image
            src="/static/newAboutUs-page/Group 1931.svg"
            height={71}
            width={71}
          />
        </a>
      </div>
      <div className={styles.contacts_yt}>
        <a href="#">
          <Image
            src="/static/newAboutUs-page/Group 1934.svg"
            height={71}
            width={71}
          />
        </a>
      </div>
      <div className={styles.contacts_linkedin}>
        <a href="#">
          <Image
            src="/static/newAboutUs-page/Group 1935.svg"
            height={71}
            width={71}
          />
        </a>
      </div>
    </div>
  );
}

export default Icons;
