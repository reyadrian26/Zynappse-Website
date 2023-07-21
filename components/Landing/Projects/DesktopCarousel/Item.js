/** COMPONENTS */
import { getLocalizedString } from "strings";

/** STYLES */
import style from "styles/main.module.scss";

export const Item = ({ item }) => {
  return (
    <div className={style.carouselItem}>
      <div className={style.carouselDiv1}>
        <div className={style.carouselImage}>
          <img src={item.projectImage} />
        </div>
        <div className={style.carouselText}>
          <div className={style.carouselProjName}>{item.projectName}</div>
          <div className={style.carouselProjDetails}>
            {item.projectDetails}
          </div>
          <div className={style.carouselProjCountry}>
            {getLocalizedString("PROJECTS_COUNTRY_LABEL")}<span>{item.country}</span>
          </div>
          <div className={style.carouselProjPlatform}>
            {getLocalizedString("PROJECTS_PLATFORMS_LABEL")}<span>{item.platforms}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
