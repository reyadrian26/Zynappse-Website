/** LIBRARIES */
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

/** STYLES */
import style from "styles/main.module.scss";

/** CONSTANTS */
import {
    ABOUT_US_YOUTUBE_AND_LINKEDIN_ICONS,
    ABOUT_US_FACEBOOK_AND_PHONE_ICONS
} from "components/constants";

const Icons = () => {
    return (
        <div className={style.iconContentContainer}>
            <div className={[style.iconsContainer, style.iconsMarginRight].join(" ")}>
                {
                    ABOUT_US_FACEBOOK_AND_PHONE_ICONS.map((item, index) => {

                        let {
                            wrapperStyle,
                            image,
                            imageStyle,
                            height,
                            width
                        } = item;

                        return (
                            <div className={wrapperStyle} key={index}>
                                <Link href="#">
                                    <Image
                                        className={imageStyle}
                                        src={image}
                                        height={height}
                                        width={width}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            <div className={[style.iconsContainer, style.iconsMarginLeft].join(" ")}>
                {
                    ABOUT_US_YOUTUBE_AND_LINKEDIN_ICONS.map((item, index) => {

                        let {
                            wrapperStyle,
                            image,
                            imageStyle,
                            height,
                            width
                        } = item;

                        return (
                            <div className={wrapperStyle} key={index}>
                                <Link href="#">
                                    <Image
                                        className={imageStyle}
                                        src={image}
                                        height={height}
                                        width={width}
                                    />
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