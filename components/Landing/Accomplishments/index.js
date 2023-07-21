/** LIBRARIES */
import dynamic from "next/dynamic";

/** Components */
const Appfutura = dynamic(() => import("./Appfutura"));
const Background = dynamic(() => import("./Background"));

import { getLocalizedString } from "strings";

/** SEMANTIC */
const Header = dynamic(() => import("semantic-ui-react").then(({ Header }) => Header));

/** STYLES */
import style from "styles/main.module.scss";

const Accomplishments = () => {

  return (
    <div className={style.accomplishmentPage} id='accomplishmentContainer'>
      <Background />
      <Header as={'h1'} className={style.accomplishmentsHeader}>{getLocalizedString("ACCOMPLISHMENT_HEADER")}</Header>
      <Appfutura />
      <div className={style.accomplishmentsTextbox} >
        <p className={style.accomplishmentsContent}>{getLocalizedString("ACCOMPLISHMENT_DESCRIPTION")}</p>
      </div>
    </div>
  )

}

export default Accomplishments;