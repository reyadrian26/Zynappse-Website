/** COMPONENTS */
import { getLocalizedString } from "strings";

/** SEMANTIC UI COMPONENTS */
import { Container, Header, Button } from "components/generics/SemanticUIReact";

/** STYLES */
import style from "../Portfolio.module.scss";
import background from "../../../public/home/HeaderImage 1.png";
import zynappseLogo from "../../../public/home/Zynappse Logo 3.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isWideScreen, setIsWideScreen] = useState(true); // Initially assuming wide screen

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 830);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Container className="background">
        <Container className="overlay">
          <Container className={style.headerContainer}>
            <Container className={'textHeader'}>
              <Header
                as="h1"
                content="YOUR SUCCESS, OUR"
                className={`${style.heroHeader} ${style.animateHeroHeader}`}
              />
              <Header
                as="h1"
                content="COMMITMENT"
                className={`${style.heroHeader2} ${style.animateHeroHeader}`}
              />

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
