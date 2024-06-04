/** COMPONENTS */
import { getLocalizedString } from "strings";

/** SEMANTIC UI COMPONENTS */
import { Container, Header, Button } from "components/generics/SemanticUIReact";

/** STYLES */
import style from "../AboutUs.module.scss";

import background from "../../../public/home/HeaderImage 1.png";
import zynappseLogo from "../../../public/home/Zynappse Logo 3.png";
import chatQuote from "../../../public/about/chat-quote.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isWideScreen, setIsWideScreen] = useState(true); // Initially assuming wide screen

  useEffect(() => {
    const handleResize = () => {
      const newIsWideScreen = window.innerWidth > 830;
      console.log("Window width:", window.innerWidth, "isWideScreen:", newIsWideScreen);
      setIsWideScreen(newIsWideScreen);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Container className="background">
        <Container className="overlay">
          <Container className="headerContainer">
            <Container className="textHeader">
              <Header
                as="h1"
                content="EMPOWERING YOUR"
                className={`${style.heroHeader} ${style.animateHeroHeader}`}
              />
              <Header
                as="h1"
                content="SUCCESS, ONE TEAM, ONE"
                className={`${style.heroHeader2} ${style.animateHeroHeader}`}
              />

              <Header
                as="h1"
                content="SOLUTION!"
                className={`${style.heroHeader3} ${style.animateHeroHeader}`}
              />

              <Image src={chatQuote} className={`${style.chatQuoteIcon} ${style.animateChatQuote}`} width={63} height={59} />

              <Header
                as="h5"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                className={`${style.heroSubheader} ${style.animateHeroHeader}`}
              />
            </Container>

            <Container className={style.logoContainer}>
              <Image
                src={zynappseLogo}
                className={`${style.zynappseLogo} ${style.animateZynappseLogo}`}
              />
            </Container>
          </Container>
        </Container>
        {isWideScreen ? (
          <Image
            src={background}
            className={`${style.backgroundImage} ${style.animateBackgroundImage}`}
          />
        ) : (
          <Image
            src={background}
            className={style.backgroundImage}
            layout="fill"
            objectFit="cover"
          />
        )}
      </Container>
    </>
  );
};

export default Hero;
