/** LIBRARIES */
import Image from 'next/image'

/** STYLES */
import style from "styles/main.module.scss";

/** CONSTANTS */
import {
    ACCOMPLISHMENTS_BACKGROUND_IMAGES
} from "components/constants";

const Background = () => {
    return (
        <>
            {
                ACCOMPLISHMENTS_BACKGROUND_IMAGES.map((item, index) => {

                    let {
                        style,
                        image,
                        height,
                        width
                    } = item;

                    return (
                        <div className={style} key={index}>
                            <Image
                                src={image}
                                width={width}
                                height={height}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Background