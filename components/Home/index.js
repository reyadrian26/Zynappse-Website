/** COMPONENTS */
import { getLocalizedString } from "strings";

/** SEMANTIC UI COMPONENTS */
import {
    Container,
    Header,
} from "components/generics/SemanticUIReact";

/** STYLES */
import style from "styles/main.module.scss";

const Home = () => { 

    return (
        <Container
            className={style.greetingsContainer}>
            <Header
                as="h1"
                textAlign="center"
                content={getLocalizedString("WELCOME_TEXT")}/>
            <code>{getLocalizedString("WELCOME_SUB_TEXT")}</code>
        </Container>
    )
}

export default Home;