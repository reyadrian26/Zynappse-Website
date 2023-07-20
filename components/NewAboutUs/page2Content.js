import React from "react";
import styles from "styles/main.module.scss";
import Image from "next/image";
import Background from "./Background";
function page2Content() {
  return (
    <div className={styles.aboutUsContent}>
      <Background />
      <div className={styles.aboutUsContentWrapper}>
        <div className={styles.aboutUsHeaderContainer}>
          <h3>ABOUT <span>US</span></h3>
          <h1>We Build Beautiful Apps</h1>
        </div>
        <div className={styles.phoneImage}>
          <Image
            src="/static/newAboutUs-page/Mask Group 1.png"
            layout="fill"
          />
        </div>
        <div className={styles.missionText}>
          <h4>
            “Zynappse’ mission is to design and provide custom applications by
            combining modern technologies, top-of-the-line equipment with
            industry standard services to meet our customer needs in order to
            make their operations and service delivery fast, simple, effective,
            and efficient.
          </h4>
          <h4>
            We believe that Zynappse customers will benefit more
            by using our applications, and our wealth of experience in various
            local and international industries to meet their current and future
            needs.”
          </h4>
          <h2>8+ years experience</h2>
        </div>
      </div>
    </div>
  );
}

export default page2Content;
