import styles from "styles/main.module.scss";

export const CarouselItems = ({ item }) => {
  return (
    <div className={styles.CarouselItem}>
      <div className={styles.CarouselDiv1}>
        <div className={styles.CarouselImage}>
          <img src={item.projectImage} />
        </div>
        <div className={styles.CarouselText}>
          <div className={styles.CarouselProjName}>{item.projectName}</div>
          <div className={styles.CarouselProjDetails}>
            {item.projectDetails}
          </div>
          <div className={styles.CarouselProjCountry}>
            Country: <span>{item.country}</span>
          </div>
          <div className={styles.CarouselProjPlatform}>
            Platforms: <span>{item.platforms}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
