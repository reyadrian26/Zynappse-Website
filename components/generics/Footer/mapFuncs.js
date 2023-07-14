/** SEMANTIC UI COMPONENTS */
import { ListItem } from "components/generics/SemanticUIReact";
import styles from "styles/main.module.scss";


const servicesArr = ["MOBILE APPS", "WEB AND E-COMMERCE", "CLOUD AND DATABASE MANAGEMENT"];
export const servicesMap = servicesArr.map((service, index) => 
    <ListItem className={styles.footerItem} key={ index }>{ service }</ListItem>
)

const skillsArr = ["ANDROID", "IOS", "WEB"];
export const skillsMap = skillsArr.map((skill, index) => 
    <ListItem className={styles.footerItem} key={ index }>{ skill }</ListItem>
)

const contactArr = ["Unit 202 2nd Floor #19 Libertad Plaza Building Libertad Street, Brgy. Highway Hills Mandaluyong City 1550", "+63. 8. 291-4837", "hi@zynappse.com"];
export const contactMap = contactArr.map((con, index) => 
    <ListItem className={`${styles["footerItem"]} ${styles["contactItem"]}`} key={ index }>{ con }</ListItem>
)