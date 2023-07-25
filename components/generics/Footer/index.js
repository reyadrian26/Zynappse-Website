import React from 'react'
import Image from 'next/image';
import { getLocalizedString } from "strings";
import style from "styles/main.module.scss";

/** COMPONENTS*/
import { images } from "components/assets"

/** SEMANTIC UI COMPONENTS */
import {
    Header,
    List,
} from "components/generics/SemanticUIReact";

import { servicesMap, skillsMap, contactMap } from './mapFuncs';

const Footer = () => {
    return (
        <div className={style.footerCont}>
            <div className={style.footerBackground}>
                <div className={style.leftFooter}>
                    <div className={[style.zyLogo, style.imageContainer].join(" ")}>
                        <Image
                            src={images.genericLogoIcon}
                            className={style.image}
                            alt='logo'
                            layout="fill"
                        />
                    </div>
                    <div>
                        <div className={[style.zyText, style.imageContainer].join(" ")}>
                            <Image
                                src={images.genericLogoText}
                                className={style.image}
                                alt='logo name'
                                layout="fill"
                            />
                        </div>
                        <p className={style.footerTagline}>{getLocalizedString("FOOTER_TAGLINE")}</p>
                    </div>
                </div>

                <div className={style.rightFooter}>
                    <div className={style.mobileTwoBlocks}>
                        <div className={style.servicesCont}>
                            <Header as='h6' className={style.footerHeader}>{getLocalizedString("FOOTER_SERVICES")}</Header>
                            <List className={style.footerList}>
                                {servicesMap}
                            </List>
                        </div>
                        <div className={style.skillsCont}>
                            <Header as='h6' className={style.footerHeader}>{getLocalizedString("FOOTER_SKILLS")}</Header>
                            <List className={style.footerList}>
                                {skillsMap}
                            </List>
                        </div>
                    </div>
                    <div className={style.contactCont}>
                        <Header as='h6' className={style.footerHeader}>{getLocalizedString("FOOTER_CONTACT")}</Header>
                        <List className={style.footerList}>
                            {contactMap}
                        </List>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer