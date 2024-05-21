
import React, { useState, useEffect, useRef } from "react";
import style from "../About/About-us.module.scss";
import groupPicture from "../../assets/Mask Group 8.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

/** SEMANTIC UI COMPONENTS */;
import {
  Container,
  Header,
  MenuItem,
  Menu,
  Segment,
  Button,
  Grid,
  GridRow,
  GridColumn,
  ListItem,
  List,
  Icon,
} from "components/generics/SemanticUIReact";

const WhoIsZynappse = () => {
  const { ref: imageRef, inView: myImageIsVisibile } = useInView();
  const [animatedImageOnce, setAnimatedImageOnce] = useState(false);
  const { ref: headerRef, inView: myHeaderIsVisible } = useInView();
  const [animatedHeaderOnce, setAnimatedHeaderOnce] = useState(false);

  useEffect(() => {
    if (myImageIsVisibile && !animatedImageOnce) {
      setAnimatedImageOnce(true);
    }
  }, [myImageIsVisibile, animatedImageOnce]);

  useEffect(() => {
    if (myHeaderIsVisible && !animatedHeaderOnce) {
      setAnimatedHeaderOnce(true);
    }
  }, [myHeaderIsVisible, animatedHeaderOnce]);

  return (
    <>
      <Container className={style.whoIsZynappseContainer}>
        <Container className={style.imageContainer}>
        <div ref={imageRef}>
            <Image className={`${style.groupPicture} ${animatedImageOnce ? style.animateImage : ""}`}
                src={groupPicture}
            /> 
        </div>
        </Container>
        <div ref={headerRef}> 
          <Header as="h1" content="WHO IS ZYNAPPSE" className={`${style.header} ${animatedHeaderOnce ? style.animateHeader : ""}`}/>
          <Header
            as="h3"
            content="Zynappse Corporation is a company that provides (IT) solutions. Our IT development team is backed up by experienced management and industry consultants who are experts in aligning and merging technology and day-to-day operational requirements to achieve an efficient and effective system. We are a mobile apps developers and creators of custom friendly applications in mobile, desktop, enterprise, and cloud computing technologies. Our core expertise is in mobile applications or apps, made easy in two of the most in demand mobile platforms: android and iOS to help you reach ten folds of your market and customers particularly in the growing smart phone community."
            className={`${style.subheader} ${animatedHeaderOnce ? style.animateHeader : ""}`}
          />
        </div>
      </Container>
    </>
  );
};

export default WhoIsZynappse;
