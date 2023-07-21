/** LIBRARIES */
import dynamic from "next/dynamic";

/** COMPONENTS */
const Content = dynamic(() => import("./Content"));

/** STYLES */
import style from "styles/main.module.scss";

function AboutUs() {
  return (
    <div id="aboutContainer" className={style.aboutUsPage}>
      <Content />
    </div>
  );
}
export default AboutUs;
