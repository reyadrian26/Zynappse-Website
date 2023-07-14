import styles from "styles/main.module.scss";

export const CarouselItems = ({ item, viewAll }) => {
  return (
    <div className={`${styles.CarouselItem} ${viewAll ? styles.ViewAll : ""}`}>
      <div className={styles.FlexContainerInLine}>
        <img className={styles.CarouselImage} src={item.projectImage} />
        <div className={styles.CarouselProjName}>{item.projectName}</div>
        <div className={styles.CarouselProjType}>
          {item.projectType}
          <span className={styles.arrow}>&gt;&gt;</span>
          <span>Visit Site</span>
        </div>
      </div>
    </div>
  );
};
