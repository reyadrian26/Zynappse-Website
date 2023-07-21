/** LIBRARIES */
import dynamic from "next/dynamic";
import Image from "next/image";

/** COMPONENTS */
import { getLocalizedString } from "strings";

/* STYLES */
import style from "styles/main.module.scss";

/** SEMANTIC UI COMPONENTS */
const Header = dynamic(() => import("semantic-ui-react").then(({ Header }) => Header));
const List = dynamic(() => import("semantic-ui-react").then(({ List }) => List));
const ListItem = dynamic(() => import("semantic-ui-react").then(({ List }) => List.Item));

const TechStack = () => {

    const techStackArr = ["Linux", "Visual C++", "JavaScript", "Objective-C", "Node.js", "NET", "AJAX", "Swift", "React", "PHP", "HTML5", "Kotlin", "MongoDB",   "Java", "CSS"];

    const techStackMap = techStackArr.map((tech, index) => 
        <ListItem className={style.listItem} key={ index }>{ tech }</ListItem> 
    )

    return ( 
        <div className={style.techStackContPage}>
            <div className={style.rightImg}>
                <Image
                    src="/static/images/cropped1.png"
                    height={652}
                    width={350}
                />
            </div>
            <div className={[style.bottomImg, style.imageContainer].join(" ")}>
                <Image
                    className={style.image}
                    src="/static/images/cropped3.png"
                    layout="fill"
                />
            </div>
            <Header as='h1' className={style.header}>
                {getLocalizedString('TECHSTACK_TITLE')}
            </Header>
            <div className={style.techBackground}></div>
            <List className={style.list}>
                { techStackMap }
            </List>
        </div>
    )    
}
 
export default TechStack;