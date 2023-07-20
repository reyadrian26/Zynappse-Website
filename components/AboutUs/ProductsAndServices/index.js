import styles from "styles/main.module.scss";
import {images} from "components/assets"
import {getLocalizedString} from "strings"

const ProductsAndServices = () => {
  return (
    <>
      <div className={styles.ProductsAndServicesContainer}>
        <div className={styles.ProductsAndServicesLabel}>
          {getLocalizedString("ABOUT_US_PRODUCTS_LABEL")} <span className={styles.RedWord}>{getLocalizedString("ABOUT_US_SERVICES_LABEL")}</span>
        </div>
        <div className={styles.GlassContainer}>
          <div className={[styles.Col1, styles.mobGlassContainer].join(" ")}>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_CLOUD_BASED_SOLUTION_LABEL")}
              <img src={images.productsAndServicesCloudIcon} />
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_IBEACONS_LABEL")}
              <img src={images.productsAndServicesIbeaconIcon} />
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_MOBILE_SOLUTIONS_LABEL")}
              <img src={images.productsAndServicesMobileIcon} />
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_AI_LABEL")}
              <img src={images.productsAndServicesAiIcon} />
            </div>
          </div>
          <div className={[styles.Col2, styles.mobGlassContainer].join(" ")}>
            {" "}
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_AR_LABEL")}
              <img src={images.productsAndServicesArIcon}/>
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_BLOCKCHAIN_LABEL")}
              <img src={images.productsAndServicesBlockchainIcon}/>
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_KINETIC_ENABLED_GAMES_LABEL")}
              <img src={images.productsAndServicesKineticGamesIcon} />
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_UI_UX_LABEL")}
              <img src={images.productsAndServicesUiUxIcon}  />
            </div>
          </div>
          <div className={[styles.Col3, styles.mobGlassContainer].join(" ")}>
            {" "}
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_PROJECT_MANAGEMENT_LABEL")}
              <img src={images.productsAndServicesProjectIcon}  />
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_QUALITY_ASSURANCE_LABEL")}
              <img src={images.productsAndServicesQaIcon} />
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_PRODUCT_DEVELOPMENT_LABEL")}
              <img src={images.productsAndServicesProductDevelopmentIcon} />
            </div>
            <div className={styles.GlassBox}>
              {getLocalizedString("ABOUT_US_HARDWARE_INFRASTRUCTURE_LABEL")}
              <img src={images.productsAndServicesHardwareInfrastructureIcon}  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsAndServices;
