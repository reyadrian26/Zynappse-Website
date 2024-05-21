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
  Icon
  //   Image
} from "components/generics/SemanticUIReact";

/** STYLES */
import style from "./Footer.module.scss";
import FooterImage from "../../assets/Footer Image@2x.png"
import Image from "next/future/image";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      {/* <Image src = {FooterImage} className={style.footerImage} layout="raw"/> */}
    </div>
  );
};

export default Footer;