import React, { useState, useEffect } from "react";
import style from "./Achievements.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

/** SEMANTIC UI COMPONENTS */ 
import { Container, Header, Segment } from "components/generics/SemanticUIReact";

import { achievements } from "./AchievementsData";

const Achievements = () => {
  const { ref: headerRef, inView: myHeaderIsVisible } = useInView();
  const [animatedHeaderOnce, setAnimatedHeaderOnce] = useState(false);
  const { ref: itemRef, inView: myItemIsVisible } = useInView();
  const [animatedItemOnce, setAnimatedItemOnce] = useState(false);

  useEffect(() => {
    if (myHeaderIsVisible && !animatedHeaderOnce) {
      setAnimatedHeaderOnce(true);
    }
  }, [myHeaderIsVisible, animatedHeaderOnce]);

  useEffect(() => {
    if (myItemIsVisible && !animatedItemOnce) {
      setAnimatedItemOnce(true);
    }
  }, [myItemIsVisible, animatedItemOnce]);

  return (
    <>
      <Container className="achievementsContainer">
        <div ref={headerRef}></div>
        <Header
          as="h1"
          content="ACHIEVEMENTS"
          className={`${style.header} ${animatedHeaderOnce ? style.animateHeader : ""}`}
        />
        <Header
          as="h3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          className={`${style.subheader} ${animatedHeaderOnce ? style.animateHeader : ""}`}
        />
        
        <div ref={itemRef}>
          <Container className={`achievementItems ${animatedItemOnce ? "animateItem" : ""}`}>
            {achievements.map((achievement, index) => (
              <Segment key={index} className="achievementItem">
                <Container className="achievementContent">
                  <Header
                    as="h2"
                    content={achievement.title}
                    className="achievementHeader"
                  />
                  <Image
                    src={achievement.image}
                    className={style.achievementIcon}
                    width={110}
                    height={110}
                  />
                </Container>
              </Segment>
            ))}
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Achievements;
