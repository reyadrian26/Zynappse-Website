/** LIBRARIES */
import dynamic from "next/dynamic";
import Link from "next/link";

/** COMPONENTS */
import { getLocalizedString } from "strings";

const IconsComponent = dynamic(() => import("./Icons"));

/** SEMANTIC */
const Button = dynamic(() => import("semantic-ui-react").then(({ Button }) => Button));

/** STYLES */
import style from "styles/main.module.scss";

function Content() {
  return (
    <div className={style.aboutUsBody}>
      <div className={style.bgContainer}></div>
      <div className={style.aboutUsContainer}>
        <h1>{getLocalizedString("ABOUT_ABOUT_US_LABEL")}</h1>
      </div>
      <div className={style.aboutUsBox}>
        <div className={style.aboutUsMission}>
          <h2>
            {getLocalizedString("ABOUT_DESCRIPTION_LABEL")}
          </h2>
          <h3>{getLocalizedString("ABOUT_INTERESTED_LABEL")}</h3>

          <div className={style.expBtnContainer}>
            <Link href='/about-us'>
              <Button className={style.expBtn}>{getLocalizedString("ABOUT_EXPLORE_LABEL")}</Button>
            </Link>
          </div>
        </div>
      </div>

      <IconsComponent />

      <div className={style.dlBtnContainer}>
        <Button className={[style.dlBtn, style.cursorPointer].join(" ")} onClick={() => { window.open(`/portfolio`, "_blank"); }}>{getLocalizedString("ABOUT_DOWNLOAD_LABEL")}</Button>
      </div>
    </div>
  );
}

export default Content;
