/** LIBRARIES */
import dynamic from "next/dynamic";

/** COMPONENTS */
const Content = dynamic(() => import("./Content"));
const Background = dynamic(() => import("./Background"));

/** STYLES */
import style from "styles/main.module.scss";

const Landing = () => {
  return (
    <div className={style.landingPage}>
      <Background />
      <Content />
    </div>
  );
};

export default Landing;
