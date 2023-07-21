/** LIBRARIES */
import dynamic from "next/dynamic";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

/** COMPONENTS */
import { Item } from "./Item";

/** STYLES */
import style from "styles/main.module.scss";

/*Import Animation Variants*/
import {
    fadeIn,
} from "../AnimationVariants";

const DesktopCarousel = (props) => {

    let {
        activeLabel,
        activeArray,
        activeIndex,
        updateIndex
    } = props;

    const getSecondAnimationVariant = () => {
        if (activeLabel === "mobileAppsProjLabel") {
            return fadeIn;
        } else if (activeLabel === "websiteProjLabel") {
            return fadeIn;
        } else {
            return fadeIn;
        }
    };

    return (
        <motion.div
            className={`${style.projectHomeCarouselContainer} ${activeLabel === "mobileAppsProjLabel" ||
                activeLabel === "websiteProjLabel" ||
                activeLabel === "contentManagementProjLabel"
                ? style.active
                : style.activeNone
                }`}
            variants={getSecondAnimationVariant()}
            animate={
                activeLabel === "mobileAppsProjLabel" ||
                    activeLabel === "websiteProjLabel" ||
                    activeLabel === "contentManagementProjLabel"
                    ? "active"
                    : "inactive"
            }
            transition={{ type: "tween", duration: 1 }}
        >
            <div
                className={style.inner}
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
                {activeArray.map((item) => {
                    return (
                        <Item
                            item={item}
                            width={"100%"}
                            key={item.projectID}
                        />
                    );
                })}
            </div>

            <div className={style.carouselButtons}>
                <div className={style.indicators}>
                    {activeArray.map((item, index) => {
                        return (
                            <button
                                className={style.indicatorButtons}
                                onClick={() => {
                                    updateIndex(index);
                                }}
                                key={item.projectID}
                            >
                                <input
                                    key={item.projectID}
                                    type="radio"
                                    className={style.indicatorActive}
                                    checked={index === activeIndex}
                                    onChange={() => {
                                        updateIndex(index);
                                    }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default DesktopCarousel