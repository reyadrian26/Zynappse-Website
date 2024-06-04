import React, { useState, useEffect } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarLogo from "../../../public/home/ZynappseNavLogo.png";
import NavbarLogo2 from "../../../public/home/ZynappseNavLogo-2.png";
import Divider from "../../../public/home/NavbarLogoDivider.png";
import Divider2 from "../../../public/home/NavLogoDivider-2.png";
import style from "./Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const router = useRouter();

  const handleMenuClick = () => {
    const navbar = document.querySelector(`.${style.navList}`);
    navbar.classList.toggle(`${style.active}`);
    setSidebarActive(!sidebarActive);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Segment
      className={`${style.navbarContainer} ${scrolled ? style.scrolled : ""} ${style.animateNavbarContainer}`}
    >
      <Menu borderless className={style.menu}>
        <Menu.Menu position="left">
          <Menu.Item className="navItem">
            <Image
              src={scrolled ? NavbarLogo2 : NavbarLogo}
              className={style.navbarLogo}
            />
            <Image
              src={scrolled ? Divider2 : Divider}
              className={style.navbarLogoDivider}
              height={51}
            />
            <span className={`${style.span1} ${scrolled ? style.scrolledText : ""}`}>
              ZYNAPPSE
            </span>
          </Menu.Item>
        </Menu.Menu>

        {sidebarActive ? (
          <Icon
            name="close" 
            id="menu-icon"
            onClick={handleMenuClick}
            className={`${style.closeMenuIcon} `}
          />
        ) : (
          <Icon
            name="align justify"
            id="menu-icon"
            onClick={handleMenuClick}
            className={`${style.menuicon} ${scrolled ? style.scrolledIcon : ""}`}
          />
        )}

        <Menu.Menu position="right" className={style.navList}>
          <Link href="/">
            <Menu.Item
              name="home"
              active={router.pathname === "/"}
              className={`navListItem ${scrolled ? "scrolledText" : ""}`}
            >
              HOME
            </Menu.Item>
          </Link>

          <Link href="/about">
            <Menu.Item
              name="about-us"
              active={router.pathname === "/about"}
              className={`navListItem ${scrolled ? "scrolledText" : ""}`}
            >
              ABOUT
            </Menu.Item>
          </Link>

          <Link href="/services">
            <Menu.Item
              name="services"
              active={router.pathname === "/services"}
              className={`navListItem ${scrolled ? "scrolledText" : ""}`}
            >
              SERVICES
            </Menu.Item>
          </Link>

          <Link href="/portfolio">
            <Menu.Item
              name="portfolio"
              active={router.pathname === "/portfolio"}
              className={`navListItem ${scrolled ? "scrolledText" : ""}`}
            >
              PORTFOLIO
            </Menu.Item>
          </Link>

          <Link href="/contact">
            <Menu.Item
              name="contact"
              active={router.pathname === "/contact"}
              className={`navListItem ${scrolled ? "scrolledText" : ""}`}
            >
              CONTACT
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Navbar;
