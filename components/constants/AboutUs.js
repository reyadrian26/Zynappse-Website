/** COMPONENTS */
import { images } from "components/assets";

/** STYLES */
import style from "styles/main.module.scss";

export const ABOUT_US_FACEBOOK_AND_PHONE_ICONS = [
    {
        wrapperStyle: style.aboutUsFB,
        image: images.aboutUsFBIcon,
        imageStyle: [style.cursorPointer, style.borderCircle].join(" "),
        height: 71,
        width: 71
    },
    {
        wrapperStyle: style.aboutUsPhone,
        image: images.aboutUsPhoneIcon,
        imageStyle: [style.cursorPointer, style.borderCircle].join(" "),
        height: 71,
        width: 71
    },
];


export const ABOUT_US_YOUTUBE_AND_LINKEDIN_ICONS = [
    {
        wrapperStyle: style.aboutUsYoutube,
        image: images.aboutUsYoutubeIcon,
        imageStyle: [style.cursorPointer, style.borderCircle].join(" "),
        height: 71,
        width: 71
    },
    {
        wrapperStyle: style.aboutUsLinkedIn,
        image: images.aboutUsLinkedInIcon,
        imageStyle: [style.cursorPointer, style.borderCircle].join(" "),
        height: 71,
        width: 71
    },
];