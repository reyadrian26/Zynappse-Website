import React, { useState, useEffect, useRef } from "react";
import style from "./OurStory.module.scss";
import { useInView } from "react-intersection-observer";

/** SEMANTIC UI COMPONENTS */ import {
  Container,
  Header,
} from "components/generics/SemanticUIReact";
import TimelineComponent from "./timelineComponent/TimelineComponent";

const OurStory = () => {
  const { ref: headerRef, inView: myHeaderIsVisible } = useInView();
  const [animatedHeaderOnce, setAnimatedHeaderOnce] = useState(false);

  useEffect(() => {
    if (myHeaderIsVisible && !animatedHeaderOnce) {
      setAnimatedHeaderOnce(true);
    }
  }, [myHeaderIsVisible, animatedHeaderOnce]);

  return (
    <>
      <Container className="ourStoryContainer">
        <div ref={headerRef}></div>
        <Header
          as="h1"
          content="OUR STORY"
          className={`${style.header} ${
            animatedHeaderOnce ? style.animateHeader : ""
          }`}
        />
        <Header
          as="h3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          className={`${style.subheader} ${
            animatedHeaderOnce ? style.animateHeader : ""
          }`}
        />
        <TimelineComponent />
      </Container>
    </>
  );
};

export default OurStory;
