/** LIBRARIES */
import Link from "next/link";
import Image from "next/image";

/** STYLES */
import style from "styles/main.module.scss";

/** CONSTANTS */
import {
    ABOUT_US_SOCIALS_ICONS
} from "components/constants";

const Icons = () => {
    return (
        <div className={style.iconContentContainer}>
            <div className={[style.iconsContainer].join(" ")}>
                {
                    ABOUT_US_SOCIALS_ICONS.map((item, index) => {

                        let {
                            wrapperStyle,
                            image,
                            imageStyle,
                            height,
                            width,
                            link
                        } = item;

                        return (
                            <div className={wrapperStyle} key={index}>
                                <Link href={link} passHref>
                                    <a target="_blank">
                                        <Image
                                            className={imageStyle}
                                            src={image}
                                            height={height}
                                            width={width}
                                        />
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Icons