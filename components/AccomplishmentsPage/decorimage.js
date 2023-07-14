import React from 'react'
import Image from 'next/image'

import styles from "styles/main.module.scss";

const DecorImage = () => {
  return (
    <div className={styles.decorCont}>
      <div className={styles.topDecorContainer}>
        <Image
          src= "/static/images/Group 1897.png"
          width={1666}
          height={1666}
        />
      </div>
      <div className={styles.rightDecorContainer}>
        <Image
          src= "/static/images/cropped1.png"
          width={200}
          height={450}
        />
      </div>
      <div className={styles.leftDecorContainer}>
        <Image
          src= "/static/images/cropped2.png"
          width={200}
          height={450}
        />
      </div>
    </div>
  )
}

export default DecorImage