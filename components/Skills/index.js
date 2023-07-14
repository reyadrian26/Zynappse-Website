import styles from "styles/main.module.scss";
import Image from "next/image";
import { getLocalizedString } from "strings";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { animVar, initVar, fadeOutVar, initVarLeft } from "./FramerMotion";

import Android from "./Android";
import Web from "./Web";
import Ios from "./Ios";

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
        if(isAndroidInView){
            animationAndroid.set(initVar)
            animationAndroid.start(animVar)       
        }
        if(!isAndroidInView){
            animationAndroid.start(fadeOutVar)
        }
        if(isWebView){
            animationWeb.set(initVarLeft)
            animationWeb.start(animVar)        
        }
        if(!isWebView){
            animationWeb.start(fadeOutVar)
        }
        if(isIosInView){
            animationIos.set(initVar)
            animationIos.start(animVar)
        }
        if(!isIosInView){
            animationIos.start(fadeOutVar)
        }
    }, [isAndroidInView, isWebView, isIosInView])

    return ( 
        <>
            <div className={styles.skillsContainer} id="skillsContainer">
            <Image
                src="/static/images/Group 1996.svg"
                alt="Circle Overlay"
                width={991}
                height={991}
            />
            <div className={styles.textBackground} />

            {/* ----------- heading ------------ */}
            <h1 className={styles.skillsHeading}>
                {getLocalizedString("SKILLS_HEADING")}
            </h1>

            {/* ----------- scrollable content ---------- */}
            <div className={styles.scrollableCont}>
                {/* ------------ android ------------------- */}
                <section className={styles.section}>
                    <div ref={androidRef}>
                        <Android />
                    </div>
                </section>

                {/* ------------------ web ------------------- */}
                <section className={styles.section}>
                    <div ref={webRef}>
                        <Web />
                    </div>
                </section>

                {/* ------------------------ ios ----------------- */}
                <section className={styles.section}>
                    <div ref={iosRef}>
                        <Ios/>
                    </div>
                </section>
            </div>

            {/* ----------- titles content ---------- */}
            <div>
                <motion.h3
                initial={initVar}
                animate={animationAndroid}
                className={styles.androidTitle}>
                    {getLocalizedString("ANDROID_TITLE")}</motion.h3>

                <motion.h3
                initial={initVar}
                animate={animationWeb}
                className={styles.webTitle}>
                    {getLocalizedString("WEB_TITLE")}</motion.h3>

                <motion.h3
                initial={initVar}
                animate={animationIos}
                className={styles.iosTitle}>
                    {getLocalizedString("IOS_TITLE")}</motion.h3>
            </div>
            </div>
        </>

    );
}

export default Skills;