/** LIBRARIES */
import { Component } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

/** SEMANTIC */
const Menu = dynamic(() => import("semantic-ui-react").then(({ Menu }) => Menu));
const MenuItem = dynamic(() => import("semantic-ui-react").then(({ Menu }) => Menu.Item));

/** STYLES */
import style from "styles/main.module.scss";


export default class MenuExampleSecondary extends Component {

  
  handleItemClick = () => {
    setTimeout(() => {
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }, 1);
  };

  render() {
    return (
       <Menu secondary className={style.navBar}>
        <Link href='/'>
        <MenuItem className={style.menu_item} 
          position="left"
          name="home"
          // active={activeItem === "home"}
          // onClick={this.handleItemClick}
        >
          <div className={style.logoBackground}></div>
          <div className={style.zyNavLogo}>
            <Image
              src="/static/images/zynappse-logo.svg"
              height={62}
              width={64}
            />
          </div>
          <div className={style.zyNavText}>
            <Image
              src="/static/images/zynappse corporation.svg"
              height={40}
              width={330}
            />
          </div>
        </MenuItem>
        </Link>
        <Link href='/'>
          <MenuItem
            name="home"
            onClick={this.handleItemClick}
            className={`${style['navItem']} ${style['homeNav']}`}
          />
        </Link>
        <Link href='/#aboutContainer'>
          <MenuItem
            name="about"
            onClick={this.handleItemClick}
            className={`${style['navItem']} ${style['aboutNav']}`}
          />
        </Link>
        <Link href='/#portfolioContainer'>
          <MenuItem
            name="portfolio"
            onClick={this.handleItemClick}
            className={`${style['navItem']} ${style['portfolioNav']}`}
          />
        </Link>
        <Link href='/#skillsContainer'>
          <MenuItem
            name="skills"
            onClick={this.handleItemClick}
            className={`${style['navItem']} ${style['skillsNav']}`}
          />
        </Link>
        <Link href='/contact-us'>
          <MenuItem
            name="contact"
            className={`${style['navItem']} ${style['contactNav']}`}
          />
        </Link>
      </Menu>

    );
  }
}
