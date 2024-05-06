import React, { useState } from "react";

/** COMPONENTS */
import { getLocalizedString } from "strings";
import Navbar from "../Navbar/Navbar";
/** SEMANTIC UI COMPONENTS */
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

/** STYLES */
import style from "../../styles/What-we-do.module.scss";

import phoneImage from "../../assets/phoneImg.png";
import Image from "next/image";

const WhatWeDo = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      <Container className={style.wwdContainer}>
        <Header as="h1" content="WHAT WE DO" className={style.wwdHeader} />
        <Header
          as="h3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          className={style.wwdSubheader}
        />

        <Grid>
          <GridRow className={style.gridRow}>
            <GridColumn width={8}>
              <Container className={style.leftContainer}>
              <Image className={style.phoneImg}
                    src= {phoneImage}
                    // width={200} // Set the width of the image
                    // height={300} // Set the height of the image
                />
              </Container>
            </GridColumn>

            <GridColumn width={8} className={style.rightColumn}>
              <List className={style.list}>
                <ListItem
                  className={style.listItem}
                  onMouseEnter={() => setHoveredItem("CLOUD")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {" "}
                  <Icon
                    name={hoveredItem === "CLOUD" ? "dot circle" : "circle"}
                    className={style.circle}
                  />
                  CLOUD BASED SOLUTIONS
                </ListItem>
                <ListItem
                  className={style.listItem}
                  onMouseEnter={() => setHoveredItem("CLOUD")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {" "}
                  <Icon
                    name={hoveredItem === "CLOUD" ? "dot circle" : "circle"}
                    className={style.circle}
                  />
                  MOBILE APP SOLUTIONS
                </ListItem>
                <ListItem
                  className={style.listItem}
                  onMouseEnter={() => setHoveredItem("CLOUD")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {" "}
                  <Icon
                    name={hoveredItem === "CLOUD" ? "dot circle" : "circle"}
                    className={style.circle}
                  />
                  WEB SOLUTIONS
                </ListItem>
                <ListItem
                  className={style.listItem}
                  onMouseEnter={() => setHoveredItem("CLOUD")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {" "}
                  <Icon
                    name={hoveredItem === "CLOUD" ? "dot circle" : "circle"}
                    className={style.circle}
                  />
                  ARTIFICIAL INTELLIGENCE
                </ListItem>
                <ListItem
                  className={style.listItem}
                  onMouseEnter={() => setHoveredItem("CLOUD")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {" "}
                  <Icon
                    name={hoveredItem === "CLOUD" ? "dot circle" : "circle"}
                    className={style.circle}
                  />
                  BLOCKCHAIN TECHNOLOGY
                </ListItem>
              </List>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  );
};

export default WhatWeDo;
