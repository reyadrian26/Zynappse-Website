import React from "react";
import Content from "./Content";
import styles from "styles/main.module.scss";
import Image from "next/image";
import {images} from "components/assets"

function index() {
  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.mainBackgroundTexture}> 
        <Image
          src={images.genericTexturedBackground}
          layout="fill"
        />
      </div>
      <Content />
    </div>
  );
}
export default index;
