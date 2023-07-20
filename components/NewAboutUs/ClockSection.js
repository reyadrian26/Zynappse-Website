import styles from "styles/main.module.scss";
import Image from "next/image";

const ClockSection = () => {
  return (
    <div className={styles.clockSection}>
        <div className={styles.clockSectionBackground}>
            <div className={styles.leftClockImage}>
                <Image src="/static/newAboutUs-page/left-clock.png" layout="fill"/>
            </div>
            <div className={styles.rightClockImage}>
                <Image src="/static/newAboutUs-page/right-clock.png" layout="fill"/>
            </div>
        </div>
        <div className={styles.clockSectionContent}>
            <h1>What were aiming for</h1>
            <div className={styles.clockSectionDescription}>
                <h4>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</h4>
            </div>
            <div className={styles.glassContainer}>
                <h4>EFFICIENCY</h4>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
            </div>
            <div className={styles.glassContainer}>
                <h4>QUALITY</h4>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
            </div>
            <div className={styles.glassContainer}>
                <h4>EFFECTIVENESS</h4>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
            </div>
        </div>
    </div>
  )
}

export default ClockSection