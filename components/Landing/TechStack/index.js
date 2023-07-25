/** LIBRARIES */
import dynamic from "next/dynamic";
import Image from "next/image";

/** COMPONENTS */
import { getLocalizedString } from "strings";
import { images } from "components/assets";

/* STYLES */
import style from "styles/main.module.scss";

/** SEMANTIC UI COMPONENTS */
const Header = dynamic(() => import("semantic-ui-react").then(({ Header }) => Header));
const List = dynamic(() => import("semantic-ui-react").then(({ List }) => List));
const ListItem = dynamic(() => import("semantic-ui-react").then(({ List }) => List.Item));

const TechStack = () => {

    const techStackArr = ["Linux", "Visual C++", "JavaScript", "Objective-C", "Node.js", "NET", "AJAX", "Swift", "React", "PHP", "HTML5", "Kotlin", "MongoDB", "Java", "CSS"];

    const techStackMap = techStackArr.map((tech, index) =>
        <ListItem className={style.listItem} key={index}>{tech}</ListItem>
    )

    return (
        <div className={style.techStackContPage}>
            <div className={style.rightImg}>
                <Image
                    src={images.techStackRightImage}
                    layout="fill"
                    alt="right background"
                />
            </div>
            <div className={[style.bottomImg, style.imageContainer].join(" ")}>
                <Image
                    className={style.image}
                    src={images.techStackBottomImage}
                    layout="fill"
                    alt="bottom background"
                />
            </div>
            <Header as='h1' className={style.header}>
                {getLocalizedString('TECHSTACK_TITLE')}
            </Header>
            <div className={style.techBackground}>
                <List className={style.list}>
                    {techStackMap}
                </List>
            </div>
        </div>
    )
}

export default TechStack;