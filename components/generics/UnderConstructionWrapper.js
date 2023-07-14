/** LIBRARIES */
import { useEffect, useState } from "react";

/** SEMANTIC UI COMPONENTS */
import {
    Container,
    Header,
} from "components/generics/SemanticUIReact";

/** STYLES */
import style from "styles/main.module.scss";

import { getLocalizedString } from "strings";

const UnderConstructionWrapper = (_Component) => {
    return (props) => {
        
        const [isUnderConstruction, setIsUnderConstruction] = useState(false);

        useEffect(() => {
            let isIgnore = false;

            if (
                !isIgnore &&
                typeof window !== "undefined"
            ) { 
                let UNDER_CONSTRUCTION = window.__NEXT_DATA__.props.UNDER_CONSTRUCTION == "true";
                setIsUnderConstruction(UNDER_CONSTRUCTION);
            }
        }, []);

        if (isUnderConstruction) {
            return (
                <div>
                    <div 
                        className={ [
                            style.content, 
                            style.textCenter
                        ].join(" ") }>
                        <Container>
                            <Header 
                                as="h1" 
                                className={ [
                                    style.pt3
                                ].join(" ") } 
                                textAlign="center">
                                { getLocalizedString("UNDER_CONSTRUCTION_TITLE") }
                            </Header>
                            <p>{ getLocalizedString("UNDER_CONSTRUCTION_DESCRIPTION") }</p>
                        </Container>
                    </div>
                </div>
            );
        } else { return (<_Component {...props} />) }
    }
}

export default UnderConstructionWrapper;