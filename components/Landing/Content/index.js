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
    <div className={style.newLanding_container}>
      <div className={style.newLanding_header}>
        <h1>{getLocalizedString("LANDING_WE_BUILD_BEAUTIFUL_LABEL")}</h1>
        <h2>{getLocalizedString("LANDING_APPS_LABEL")}</h2>
      </div>
      <div className={style.newLanding_subheader}>
        <h4>
          {getLocalizedString("LANDING_CONTENT_LABEL")}
        </h4>
        <div className={style.learn_more}>
          <h5>{getLocalizedString("LANDING_LEARN_MORE_LABEL")}</h5>
          <div className={style.arrow_container}>
            <Image
              className={style.arrow_left}
              src={images.arrowLeft}
              height={39}
              width={39}
            />
          </div>
        </div>
      </div>
      <Boxes />
    </div>
  );
}

export default Content;
