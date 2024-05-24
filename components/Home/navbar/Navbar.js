import React, { useState, useEffect } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarLogo from "../../../public/home/ZynappseNavLogo.png";
import NavbarLogo2 from "../../../public/home/ZynappseNavLogo-2.png"; // Import the new logo image
import Divider from "../../../public/home/NavbarLogoDivider.png";
import Divider2 from "../../../public/home/NavLogoDivider-2.png"; // Import the new divider image
import style from "./Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const handleMenuClick = () => {
    const navbar = document.querySelector(`.${style.navList}`);
    navbar.classList.toggle(`${style.active}`);
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
              src={scrolled ? NavbarLogo2 : NavbarLogo} // Toggle image based on scroll state
              className={style.navbarLogo} 
            />
            <Image 
              src={scrolled ? Divider2 : Divider} // Toggle image based on scroll state
              className={style.navbarLogoDivider} 
              height={51} 
            />
            <span
              className={`${style.span1} ${scrolled ? style.scrolledText : ""}`}
            >
              ZYNAPPSE
            </span>
          </Menu.Item>
        </Menu.Menu>

        <Icon
          name="align justify"
          id="menu-icon"
          onClick={handleMenuClick}
          className={`${style.menuicon} ${scrolled ? style.scrolledIcon : ""}`}
        />

        <Menu.Menu position="right" className={style.navList}>
          <Link href="/">
            <Menu.Item
              name="home"
              active={router.pathname === "/"}
              className={`${style.item} ${scrolled ? style.scrolledText : ""}`}
            >
              HOME
            </Menu.Item>
          </Link>

          <Link href="/about">
            <Menu.Item
              name="about-us"
              active={router.pathname === "/about"}
              className={`${style.item} ${scrolled ? style.scrolledText : ""}`}
            >
              ABOUT
            </Menu.Item>
          </Link>

          <Link href="/services">
            <Menu.Item
              name="services"
              active={router.pathname === "/services"}
              className={`${style.item} ${scrolled ? style.scrolledText : ""}`}
            >
              SERVICES
            </Menu.Item>
          </Link>

          <Link href="/portfolio">
            <Menu.Item
              name="portfolio"
              active={router.pathname === "/portfolio"}
              className={`${style.item} ${scrolled ? style.scrolledText : ""}`}
            >
              PORTFOLIO
            </Menu.Item>
          </Link>

          <Link href="/contact">
            <Menu.Item
              name="contact"
              active={router.pathname === "/contact"}
              className={`${style.item} ${scrolled ? style.scrolledText : ""}`}
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
