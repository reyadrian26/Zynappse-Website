import React from 'react'
import Image from 'next/image';
import { getLocalizedString } from "strings";
import styles from "styles/main.module.scss";

/** SEMANTIC UI COMPONENTS */
import {
    Header,
    List,
} from "components/generics/SemanticUIReact";

import { servicesMap, skillsMap, contactMap } from './mapFuncs';

const Footer = () => {
    return (
        <div className={styles.footerCont}>
            <div className={styles.footerBackground}>
                <div className={styles.zyLogo}>
                    <Image
                        src="/static/images/zynappse-logo.svg"
                        height={62}
                        width={64}
                    />
                </div>
                <div className={styles.zyText}>
                    <Image
                        src="/static/images/zynappse corporation.svg"
                        height={40}
                        width={330}
                    />
                </div>
                <p className={styles.footerTagline}>{getLocalizedString("FOOTER_TAGLINE")}</p>
                <div className={styles.servicesCont}>
                    <Header as='h6' className={styles.footerHeader}>{getLocalizedString("FOOTER_SERVICES")}</Header>
                    <List className={styles.footerList}>
                        {servicesMap}
                    </List>
                </div>
                <div className={styles.skillsCont}>
                    <Header as='h6' className={styles.footerHeader}>{getLocalizedString("FOOTER_SKILLS")}</Header>
                    <List className={styles.footerList}>
                        {skillsMap}
                    </List>
                </div>
                <div className={styles.contactCont}>
                    <Header as='h6' className={styles.footerHeader}>{getLocalizedString("FOOTER_CONTACT")}</Header>
                    <List className={styles.footerList}>
                        {contactMap}
                    </List>
                    {/* <div className={styles.locationIcon}>
                    <Image
                        src="/static/images/location.svg"
                        height={16}
                        width={11}
                    />
                </div>
                <div className={styles.phoneIcon}>
                    <Image
                        src="/static/images/phone.svg"
                        height={15}
                        width={13}
                    />
                </div>
                <div className={styles.mailIcon}>
                    <Image
                        src="/static/images/mail.svg"
                        height={13}
                        width={17}
                    />
                </div> */}
                </div>
            </div>
        </div>
    );
}

export default Footer