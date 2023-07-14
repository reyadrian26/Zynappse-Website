/** LIBRARIES */
import dynamic from "next/dynamic";
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";

const Boxes = dynamic(() => import("./Boxes"));

/** STYLES */
import style from "styles/main.module.scss";

function Content() {
  return (
    <div className={style.newLanding_container}>
      <div className={style.newLanding_header}>
        <h1>We Build Beautiful</h1>
        <h2>Apps</h2>
      </div>
      <div className={style.newLanding_subheader}>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h4>
        <div className={style.learn_more}>
          <h5>Learn More</h5>
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
