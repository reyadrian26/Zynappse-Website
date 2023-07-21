/** LIBRARIES */
import dynamic from "next/dynamic";
import Image from 'next/image'

/** SEMANTIC */
const Grid = dynamic(() => import("semantic-ui-react").then(({ Grid }) => Grid));
const GridRow = dynamic(() => import("semantic-ui-react").then(({ Grid }) => Grid.Row));
const GridColumn = dynamic(() => import("semantic-ui-react").then(({ Grid }) => Grid.Column));

/** STYLES */
import style from "styles/main.module.scss";

/** CONSTANTS */
import {
    ACCOMPLISHMENTS_APPFUTURA_ACHIEVEMENTS
} from "components/constants";

const Appfutura = () => {
    return (
        <Grid doubling columns={4} className={style.accomplishmentGrid}>
            <GridRow>
                {
                    ACCOMPLISHMENTS_APPFUTURA_ACHIEVEMENTS.map((item, index) => {

                        let {
                            image,
                            height,
                            width
                        } = item;

                        return (
                            <GridColumn key={index} textAlign={'center'}>
                                <Image
                                    src={image}
                                    width={height}
                                    height={width}
                                />
                            </GridColumn>
                        )
                    })
                }
            </GridRow>
        </Grid>
    )
}

export default Appfutura