/** COMPONENTS */
import { getLocalizedString } from "strings";
import Navbar from "../Navbar/Navbar";
/** SEMANTIC UI COMPONENTS */
import { Container, Header, Button } from "components/generics/SemanticUIReact";

/** STYLES */
import style from "../../styles/main.module.scss";

import background from "../../assets/Header Image 1.png";
import zynappseLogo from "../../assets/Zynappse Logo 3.png";
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
            <Container className={style.textHeader}>
              <Header
                as="h1"
                content="MODERN WEB & MOBILE"
                className={style.header}
              />
              <Header
                as="h1"
                content="APPLICATION SERVICE SOLUTIONS"
                className={style.header2}
              />

              <Header
                as="h5"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                className={style.subheader}
              />

              <Button primary content="CONTACT US" className={style.button} />
            </Container>

            <Container className={style.logoContainer}>
              <Image src={zynappseLogo} className={style.zynappseLogo} />
            </Container>
          </Container>
        </Container>
        {isWideScreen ? (
          <Image src={background} className={style.backgroundImage} />
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
