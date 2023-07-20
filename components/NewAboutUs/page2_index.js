import React from "react";
import Content from "./page2Content";
import styles from "styles/main.module.scss";
import Image from "next/image";
import Background from "./Background";

function index() {
  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.mainBackgroundTexture}> 
        <Image
          src="/static/newAboutUs-page/Group 1891.png"
          layout="fill"
        />
      </div>
      <Content />
    </div>
  );
}
export default index;
