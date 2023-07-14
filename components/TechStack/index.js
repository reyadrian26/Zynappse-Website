/** COMPONENTS */
import { getLocalizedString } from "strings";
import Image from "next/image";

/* STYLES */
import styles from "styles/main.module.scss";
import Footer from "../generics/Footer";

/** SEMANTIC UI COMPONENTS */
import {
    Header,
    List,
    ListItem
} from "components/generics/SemanticUIReact";


const TechStack = () => {

    const techStackArr = ["Linux", "Visual C++", "JavaScript", "Objective-C", "Node.js", "NET", "AJAX", "Swift", "React", "PHP", "HTML5", "Kotlin", "MongoDB",   "Java", "CSS"];

    const techStackMap = techStackArr.map((tech, index) => 
        <ListItem className={styles.listItem} key={ index }>{ tech }</ListItem> 
    )

    return ( 
        <div className={styles.techStackCont}>
            <div className={styles.rightImg}>
                <Image
                    src="/static/images/cropped1.png"
                    height={652}
                    width={350}
                />
            </div>
            <div className={styles.bottomImg}>
                <Image
                    src="/static/images/cropped3.png"
                    height={450}
                    width={800}
                />
            </div>
            <Header as='h1' className={styles.header}>
                {getLocalizedString('TECHSTACK_TITLE')}
            </Header>
            <div className={styles.techBackground}></div>
            <List className={styles.list}>
                { techStackMap }
            </List>
            <Footer/>
        </div>
    )    
}
 
export default TechStack;