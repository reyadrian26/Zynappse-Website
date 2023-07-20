import React from 'react';
import styles from 'styles/main.module.scss';
import Image from 'next/image';
import executivesList from './ExecutivesList';
import {getLocalizedString} from "strings"
const Index = () => {
    
    // splits the array
    const firstRowExecutives = executivesList.slice(0, 3);
    const secondRowExecutives = executivesList.slice(3);

    return (
        <div className={styles.executivesContainer}>
            <div className={styles.executivesDiv}>
                <h2 className={styles.executiveTitle}>
                    {getLocalizedString("ABOUT_US_EXECUTIVE_TITLE")}
                </h2>
                <div className={styles.executivesFirstRow}>
                    {firstRowExecutives.map((executive, index) => (
                        <div key={index} className={styles['column' + executive.id]}>
                            <div className={styles.teamProfileWrapper}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={executive.imageFile}
                                        alt={executive.alt}
                                        layout='fill'
                                        className={styles.imageStyle}/>
                                </div>
                            </div>
                            <h2 className={styles.executiveName}>
                                {executive.name}
                            </h2>
                            <h4 className={styles.executivePosition}>
                                {executive.position}
                            </h4>
                            <p className={styles.executiveDescription}>
                                {executive.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.executivesSecondRow}>
                    {secondRowExecutives.map((executive, index) => (
                        <div key={index} className={styles['column' + executive.id]}>
                            <div className={styles.teamProfileWrapper}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={executive.imageFile}
                                        alt={executive.alt}
                                        layout='fill'
                                        className={styles.imageStyle}/>
                                </div>
                            </div>
                            <h2 className={styles.executiveName}>
                                {executive.name}
                            </h2>
                            <h4 className={styles.executivePosition}>
                                {executive.position}
                            </h4>
                            <p className={styles.executiveDescription}>
                                {executive.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.placeHolderContainer}>
                <div className={styles.placeholderDiv}>
                    <p>{getLocalizedString("ABOUT_US_CONTENT_QUOTE_LABEL")}</p>
                    <p className={styles.quoteText}>{getLocalizedString("ABOUT_US_CONTENT_AUTHOR_LABEL")}</p>
                </div>
            </div>
        </div>

    );
};

export default Index;