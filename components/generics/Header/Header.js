/** LIBRARIES */
import { useState } from "react";
import dynamic from "next/dynamic";

/** COMPONENTS */
const Desktop = dynamic(() => import("./Desktop"));
const Mobile = dynamic(() => import("./Mobile"));
const MobileContent = dynamic(() => import("./Mobile/Content"));

/** STYLES */
import style from "styles/main.module.scss";

const Header = () => {

  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  let mobileProps = {
    isBurgerClicked,
    setIsBurgerClicked,
  };

  return (
    <div>
      <div className={style.headerDesktopWrapper}>
        <Desktop />
      </div>
      <div className={style.headerMobileWrapper}>
        <Mobile {...mobileProps} />
        <MobileContent {...mobileProps} />
      </div>
    </div>
  )
}

export default Header