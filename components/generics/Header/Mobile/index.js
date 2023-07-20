/** STYLES */
import style from "styles/main.module.scss";
import Image from "next/image";

/** COMPONENTS*/
import {images} from "components/assets"

const Mobile = (props) => {

    let {
        isBurgerClicked,
        setIsBurgerClicked,
    } = props;

    return (
        <div className={style.headerMobileContainer}>
            {/* LOGO */}
            <div className={style.zyNavLogo}>
                <Image
                src= {images.genericLogoIcon}
                layout="fill"
                />
            </div>
            {/* BURGER */}
            <div
                className={[
                    style.displayNone,
                    style.burgerWrapperGeneric,
                    isBurgerClicked ? style.open : "",
                ].join(" ")}
                onClick={() => setIsBurgerClicked(!isBurgerClicked)}
            >
                <span />
                <span />
                <span />
                <span />
            </div>
        </div>
    )
}

export default Mobile