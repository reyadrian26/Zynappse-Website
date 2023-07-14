import React from "react";
import styles from "styles/main.module.scss";
import Image from "next/image";
import Background from "./Background";
function page2Content() {
  return (
    <div className={styles.page2_body}>
      <Background />
      <div className={styles.page2_container}>
        <div className={styles.page2_header}>
          <h3>ABOUT US</h3>
          <h1>We Build Beautiful Apps</h1>
        </div>
        <div className={styles.page2_img}>
          <div className={styles.phone_img}>
            <Image
              src="/static/newAboutUs-page/Mask Group 1.png"
              width={609}
              height={794}
            />
          </div>
        </div>
        <div className={styles.page2_mission}>
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
