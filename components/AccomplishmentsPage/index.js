import React from 'react'
import { getLocalizedString } from "strings";
/** Styles */
import styles from "styles/main.module.scss";

/** Components */
import Aptura from './aptura';
import Decorimage from './decorimage';


const Accomplishments = () => {

  return (
    <div className={styles.accomplishmentContainer} id='accomplishmentContainer'>
      <Decorimage />
      <p className={styles.accomplishmentsHeader}>{getLocalizedString("ACCOMPLISHMENT_HEADER")}</p>
      <Aptura />
      <div className={styles.accomplishmentsTextbox} />
      <p className={styles.accomplishmentsContent}>{getLocalizedString("ACCOMPLISHMENT_DESCRIPTION")}</p>
    </div>

  )

}

export default Accomplishments;