import styles from "styles/main.module.scss";

const ProductsAndServices = () => {
  return (
    <>
      <div className={styles.ProductsAndServicesContainer}>
        <div className={styles.ProductsAndServicesLabel}>
          PRODUCTS AND <span className={styles.RedWord}>SERVICES</span>
        </div>
        <div className={styles.GlassContainer}>
          <div className={[styles.Col1, styles.mobGlassContainer].join(" ")}>
            <div className={styles.GlassBox}>
              CLOUD BASED SOLUTIONS
              <img src="/ProductsAndServices/cloudicon.svg" />
            </div>
            <div className={styles.GlassBox}>
              iBEACONS
              <img src="/ProductsAndServices/beaconsicon.svg" />
            </div>
            <div className={styles.GlassBox}>
              MOBILE SOLUTIONS{" "}
              <img src="/ProductsAndServices/mobile-solutions-icon.svg" />
            </div>
            <div className={styles.GlassBox}>
              ARTIFICIAL INTELLIGENCE{" "}
              <img src="/ProductsAndServices/ai-icon.svg" />
            </div>
          </div>
          <div className={[styles.Col2, styles.mobGlassContainer].join(" ")}>
            {" "}
            <div className={styles.GlassBox}>
              AUGMENTED REALITY
              <img src="/ProductsAndServices/ar-icon.svg" />
            </div>
            <div className={styles.GlassBox}>
              BLOCKCHAIN
              <img src="/ProductsAndServices/blockchain-icon.svg" />
            </div>
            <div className={styles.GlassBox}>
              KINECT ENABLED GAMES{" "}
              <img src="/ProductsAndServices/kinect-enabled-games-icon.svg" />
            </div>
            <div className={styles.GlassBox}>
              UI/UX <img src="/ProductsAndServices/ui-ux-icon.svg" />
            </div>
          </div>
          <div className={[styles.Col3, styles.mobGlassContainer].join(" ")}>
            {" "}
            <div className={styles.GlassBox}>
              PROJECT MANAGEMENT
              <img src="/ProductsAndServices/project-management-icon.svg" />
            </div>
            <div className={styles.GlassBox}>
              QUALITY ASSURANCE AND TESTING{" "}
              <img src="/ProductsAndServices/qa-icon.svg" />
            </div>
            <div className={styles.GlassBox}>
              PRODUCT/BRAND DEVELOPMENT{" "}
              <img src="/ProductsAndServices/product-development-icon.svg" />
            </div>
            <div className={styles.GlassBox}>
              HARDWARE INFRASTRUCTURE{" "}
              <img src="/ProductsAndServices/hardware-infrastructure-icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsAndServices;
