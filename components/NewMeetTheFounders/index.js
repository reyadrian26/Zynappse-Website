import React from 'react';
import styles from 'styles/main.module.scss';
import Image from 'next/image';
import executivesList from '../NewMeetTheFounders/executives_list';
import Footer from "../generics/Footer"
const Index = () => {
    
    // splits the array
    const firstRowExecutives = executivesList.slice(0, 3);
    const secondRowExecutives = executivesList.slice(3);

    return (
        <div className={styles.executivesContainer}>
            <div className={styles.executivesDiv}>
                <h2 className={styles.executiveTitle}>
                    Executive Directors
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
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                    </p>
                    <p className={styles.quoteText}>
                        -Lorem Ipsum
                    </p>
                </div>
                {/* <div className={styles.meetTheFoundersFooter}>
                    <Footer/>
                </div> */}
            </div>
        </div>

    );
};

export default Index;