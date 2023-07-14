import React from 'react'
import Image from 'next/image'
import styles from "styles/main.module.scss";

const aptura = () => {
  return (
    <div className={styles.aptura}>
      <div className={styles.flexbox}>
      <Image
        src='/static/images/aptura1@2x.png'
        width={253}
        height={228}
      />
      </div>
      <div className={styles.flexbox}>
      <Image
        src='/static/images/aptura2@2x.png'
        width={253}
        height={228}
      />
      </div>
      <div className={styles.flexbox}>
      <Image
        src='/static/images/aptura3@2x.png'
        width={253}
        height={228}
      />
      </div>
      <div className={styles.flexbox}>
        <div className={styles.img4}>
          <Image
            src='/static/images/aptura4@2x.png'
            width={254}
            height={229}
          />
      </div>
      </div>
    </div>
  )
}

export default aptura