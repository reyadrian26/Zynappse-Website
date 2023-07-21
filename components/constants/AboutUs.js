/** COMPONENTS */
import { images } from "components/assets";

/** STYLES */
import style from "styles/main.module.scss";

export const ABOUT_US_SOCIALS_ICONS = [
    {
        wrapperStyle: style.aboutUsFB,
        image: images.aboutUsFBIcon,
        imageStyle: [style.cursorPointer, style.borderCircle].join(" "),
        height: 71,
        width: 71,
        link: "https://www.facebook.com/zynappse/"
    },
    // {
    //     wrapperStyle: style.aboutUsYoutube,
    //     image: images.aboutUsYoutubeIcon,
    //     imageStyle: [style.cursorPointer, style.borderCircle].join(" "),
    //     height: 71,
    //     width: 71,
    //     link: "https://www.youtube.com/@zynappsecorporation5026"
    // },
    // {
    //     wrapperStyle: style.aboutUsLinkedIn,
    //     image: images.aboutUsLinkedInIcon,
    //     imageStyle: [style.cursorPointer, style.borderCircle].join(" "),
    //     height: 71,
    //     width: 71,
    //     link: "https://ph.linkedin.com/in/zynappse-corporation-535885a2"
    // },
];
