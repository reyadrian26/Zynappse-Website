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
  //   Image
} from "components/generics/SemanticUIReact";

/** STYLES */
import style from "../../styles/OurPortfolio.module.scss";

import projectImage from "../../assets/projectImage.png";
import Image from "next/image";

const OurPortfolio = () => {
  return (
    <>
      <Container className="ourPortfolioContainer">
        <Container className='leftSide'></Container>
        <Container className='rightSide'>
          <Container className={style.rightSideContainer}>
            <Container className="clientName">CLIENT NAME</Container>
            <Container className={style.projectDetails}>
              <Header
                as="h1"
                content="PROJECT NAME"
                className={style.projectName}
              ></Header>
              <Header
                as="h5"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                className={style.projectDescription}
              ></Header>
            </Container>
          </Container>
        </Container>
        <Image
          src={projectImage}
          className={style.imageOverlay}
          layout="fill"
        />
        <Header
          as="h1"
          content="OUR PORTFOLIO"
          className={style.header}
        ></Header>
        <Header as="h5" content="ZYNPPS" className={style.zynpps}></Header>
        <Button className={style.viewMoreBtn}>VIEW MORE <span className={style.arrow}>&#10148;</span> </Button>
      </Container>
    </>
  );
};

export default OurPortfolio;
