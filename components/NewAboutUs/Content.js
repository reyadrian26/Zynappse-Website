import React from "react";
import styles from "styles/main.module.scss";
import { Button } from "semantic-ui-react";
import Icons from "../NewAboutUs/Icons";
import Link from "next/link";
function Content() {
  return (
    <div className={styles.newAboutUs_body}>
      <div className={styles.bg_container}></div>
      <div className={styles.newAboutUs_container}>
        <h1>ABOUT US</h1>
      </div>
      <div className={styles.newAboutUs_box}>
        <div className={styles.newAboutUs_mission}>
          <h2>
            Zynappse’ mission is to design and provide custom develop
            applications by combining modern technologies, top-of-the-line
            equipment with industry standard services to meet our customer needs
            in order to make their operations and service delivery fast, simple,
            effective, and efficient.
          </h2>
          <h3>Interested? Learn more about us!</h3>

          <div className={styles.expBtn_container}>
            <Link href='/about-us'>
              <Button className={styles.expBtn}>Explore</Button>
            </Link>
          </div>
        </div>
      </div>
      <Icons />

      <div className={styles.dlBtn_container}>
        <Button className={styles.dlBtn}>Download Our Portfolio</Button>
      </div>
    </div>
  );
}

export default Content;
