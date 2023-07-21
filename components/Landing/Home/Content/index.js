/** LIBRARIES */
import dynamic from "next/dynamic";
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";
import { getLocalizedString } from "strings";

const Boxes = dynamic(() => import("./Boxes"));

/** STYLES */
import style from "styles/main.module.scss";

function Content() {
  return (
    <div className={style.landingContainer}>
      <div className={style.landingHeader}>
        <h1>{getLocalizedString("LANDING_WE_BUILD_BEAUTIFUL_LABEL")} <span>{getLocalizedString("LANDING_APPS_LABEL")}</span></h1>
      </div>
      <div className={style.landingSubheader}>
        <h4>
          {getLocalizedString("LANDING_CONTENT_LABEL")}
        </h4>
        <div className={style.landingLearnMoreWrapper}>
          <div className={style.landingLearnMore}>
            <div className={style.landingArrowContainer}>
              <Image
                className={style.arrow_left}
                src={images.arrowLeft}
                height={39}
                width={39}
              />
            </div>
            <h5>{getLocalizedString("LANDING_LEARN_MORE_LABEL")}</h5>
          </div>
        </div>
      </div>
      <Boxes />
    </div>
  );
}

export default Content;
