/** COMPONENTS */
import { getLocalizedString } from "strings";

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

import Image from "next/future/image";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
    </div>
  );
};

export default Footer;