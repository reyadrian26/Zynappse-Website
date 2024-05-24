import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

/** COMPONENTS */
import { getLocalizedString } from "strings";

/** SEMANTIC UI COMPONENTS */
import {
  Container,
  Header,
  Grid,
  GridRow,
  GridColumn,
  ListItem,
  List,
  Icon,
} from "components/generics/SemanticUIReact";

/** STYLES */
import style from "./WhatWeDo.module.scss";

import phoneImage from "../../../public/home/phoneImg.png";
// import image1 from "../../assets/image1.png";
// import image2 from "../../assets/image2.png";
// import image3 from "../../assets/image3.png";
// import image4 from "../../assets/image4.png";
import Image from "next/image";

const WhatWeDo = () => {
  const { ref: headerRef, inView: myHeaderIsVisible } = useInView();
  const { ref: itemRef, inView: myItemIsVisible } = useInView();
  const { ref: containerRef, inView: myContainerIsVisible } = useInView();
  const [selectedItem, setSelectedItem] = useState("CLOUD");
  const [animatedHeaderOnce, setAnimatedHeaderOnce] = useState(false);
  const [animatedItemOnce, setAnimatedItemOnce] = useState(false);
  const [animatedContainerOnce, setAnimatedContainerOnce] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [animateLeftContainer, setAnimateLeftContainer] = useState(false);

  const images = {
    CLOUD: phoneImage,
    MOBILE: phoneImage,
    WEB: phoneImage,
    AI: phoneImage,
    BLOCKCHAIN: phoneImage,
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setAnimateLeftContainer(true); // Trigger left container animation
  };

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

  useEffect(() => {
    if (myHeaderIsVisible && !animatedHeaderOnce) {
      setAnimatedHeaderOnce(true);
    }
  }, [myHeaderIsVisible, animatedHeaderOnce]);

  useEffect(() => {
    if (myContainerIsVisible && !animatedContainerOnce) {
      setAnimatedContainerOnce(true);
    }
  }, [myItemIsVisible, animatedContainerOnce]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateLeftContainer(false);
    }, 0); 
    return () => clearTimeout(timeout);
  }, [animateLeftContainer]);

  return (
    <>
      <Container className={style.container}>
        <div ref={headerRef}>
          <Header
            as="h1"
            content="WHAT WE DO"
            className={`${style.header} ${
              animatedHeaderOnce ? style.animateHeader : ""
            }`}
          />
          <Header
            as="h3"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            className={`${style.subheader} ${
              animatedHeaderOnce ? style.animateHeader : ""
            }`}
          />{" "}
        </div>

        <Grid>
          <GridRow className={style.gridRow}>
            <GridColumn width={8}>
              <div ref={containerRef}>
                <Container
                  className={`${style.leftContainer} ${
                    selectedItem ? style[selectedItem] : ""
                  } ${
                    animateLeftContainer ? style.animateContainerOnClick : ""
                  } ${animatedContainerOnce ? style.animateLeftContainer : ""}
                  `}
                >
                  <Image
                    className={style.phoneImg}
                    src={images[selectedItem] || phoneImage}
                  />
                </Container>
              </div>
            </GridColumn>

            <GridColumn width={8} className={style.rightColumn}>
              <List className={style.list}>
                <div ref={itemRef}>
                  <ListItem
                    className={`${style.listItem} ${
                      selectedItem === "CLOUD" || selectedItem === null
                        ? style.active
                        : ""
                    } ${animatedItemOnce ? style.animateFirstListItem : ""}`}
                    onClick={() => handleItemClick("CLOUD")}
                    onMouseEnter={() => setHoveredItem("CLOUD")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Icon
                      name={
                        selectedItem === "CLOUD" || hoveredItem === "CLOUD"
                          ? "dot circle"
                          : "circle"
                      }
                      className={style.circle}
                    />
                    CLOUD BASED SOLUTIONS
                  </ListItem>
                </div>

                <div ref={itemRef}>
                  <ListItem
                    className={`${style.listItem} ${
                      selectedItem === "MOBILE" ? style.active : ""
                    } ${animatedItemOnce ? style.animateRestListItems : ""}`}
                    onClick={() => handleItemClick("MOBILE")}
                    onMouseEnter={() => setHoveredItem("MOBILE")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Icon
                      name={
                        selectedItem === "MOBILE" || hoveredItem === "MOBILE"
                          ? "dot circle"
                          : "circle"
                      }
                      className={style.circle}
                    />
                    MOBILE APP SOLUTIONS
                  </ListItem>
                </div>

                <div ref={itemRef}>
                  <ListItem
                    className={`${style.listItem} ${
                      selectedItem === "WEB" ? style.active : ""
                    } ${animatedItemOnce ? style.animateRestListItems : ""}`}
                    onClick={() => handleItemClick("WEB")}
                    onMouseEnter={() => setHoveredItem("WEB")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Icon
                      name={
                        selectedItem === "WEB" || hoveredItem === "WEB"
                          ? "dot circle"
                          : "circle"
                      }
                      className={style.circle}
                    />
                    WEB SOLUTIONS
                  </ListItem>
                </div>

                <div ref={itemRef}>
                  <ListItem
                    className={`${style.listItem} ${
                      selectedItem === "AI" ? style.active : ""
                    } ${animatedItemOnce ? style.animateRestListItems : ""}`}
                    onClick={() => handleItemClick("AI")}
                    onMouseEnter={() => setHoveredItem("AI")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Icon
                      name={
                        selectedItem === "AI" || hoveredItem === "AI"
                          ? "dot circle"
                          : "circle"
                      }
                      className={style.circle}
                    />
                    ARTIFICIAL INTELLIGENCE
                  </ListItem>
                </div>
                <div ref={itemRef}>
                  <ListItem
                    className={`${style.listItem} ${
                      selectedItem === "BLOCKCHAIN" ? style.active : ""
                    } ${animatedItemOnce ? style.animateRestListItems : ""}`}
                    onClick={() => handleItemClick("BLOCKCHAIN")}
                    onMouseEnter={() => setHoveredItem("BLOCKCHAIN")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Icon
                      name={
                        selectedItem === "BLOCKCHAIN" ||
                        hoveredItem === "BLOCKCHAIN"
                          ? "dot circle"
                          : "circle"
                      }
                      className={style.circle}
                    />
                    BLOCKCHAIN TECHNOLOGY
                  </ListItem>
                </div>
              </List>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  );
};

export default WhatWeDo;
