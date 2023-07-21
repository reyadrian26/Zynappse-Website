/** LIBRARIES */
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/** COMPONENTS */
import { images } from "components/assets";
import { getLocalizedString } from "strings";

const Android = dynamic(() => import("./Android"));
const Web = dynamic(() => import("./Web"));
const Ios = dynamic(() => import("./Ios"));

/** STYLES */
import style from "styles/main.module.scss";

/** ANIMATIONS */
import {
    animVar,
    initVar,
    fadeOutVar,
    initVarLeft,
} from "./FramerMotion";

const Skills = () => {
    const animationAndroid = useAnimation();
    const animationWeb = useAnimation();
    const animationIos = useAnimation();

    const androidRef = useRef(null)
    const isAndroidInView = useInView(androidRef)
    const webRef = useRef(null)
    const isWebView = useInView(webRef)
    const iosRef = useRef(null)
    const isIosInView = useInView(iosRef)

    useEffect(() => {
        if (isAndroidInView) {
            animationAndroid.set(initVar)
            animationAndroid.start(animVar)
        }
        if (!isAndroidInView) {
            animationAndroid.start(fadeOutVar)
        }
        if (isWebView) {
            animationWeb.set(initVarLeft)
            animationWeb.start(animVar)
        }
        if (!isWebView) {
            animationWeb.start(fadeOutVar)
        }
        if (isIosInView) {
            animationIos.set(initVar)
            animationIos.start(animVar)
        }
        if (!isIosInView) {
            animationIos.start(fadeOutVar)
        }
    }, [isAndroidInView, isWebView, isIosInView])

    return (
        <div className={style.skillsPage} id="skillsContainer">
            <Image
                src={images.skillsCircleImage}
                alt="Circle Overlay"
                width={991}
                height={991}
            />
            <div className={style.textBackground} />

            {/* ----------- heading ------------ */}
            <h1 className={style.skillsHeading}>
                {getLocalizedString("SKILLS_HEADING")}
            </h1>

            {/* ----------- scrollable content ---------- */}
            <div className={style.scrollableCont}>
                {/* ------------ android ------------------- */}
                <section className={style.section}>
                    <div ref={androidRef}>
                        <Android />
                    </div>
                </section>

                {/* ------------------ web ------------------- */}
                <section className={style.section}>
                    <div ref={webRef}>
                        <Web />
                    </div>
                </section>

                {/* ------------------------ ios ----------------- */}
                <section className={style.section}>
                    <div ref={iosRef}>
                        <Ios />
                    </div>
                </section>
            </div>

            {/* ----------- titles content ---------- */}
            <motion.h3
                    initial={initVar}
                    animate={animationAndroid}
                    className={style.androidTitle}>
                    {getLocalizedString("ANDROID_TITLE")}</motion.h3>

            <motion.h3
                initial={initVar}
                animate={animationWeb}
                className={style.webTitle}>
                {getLocalizedString("WEB_TITLE")}</motion.h3>

            <motion.h3
                initial={initVar}
                animate={animationIos}
                className={style.iosTitle}>
                {getLocalizedString("IOS_TITLE")}</motion.h3>
        </div>
    );
}

export default Skills;