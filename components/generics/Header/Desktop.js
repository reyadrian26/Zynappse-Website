/** LIBRARIES */
import {  useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

/** SEMANTIC */
const Menu = dynamic(() => import("semantic-ui-react").then(({ Menu }) => Menu));
const MenuItem = dynamic(() => import("semantic-ui-react").then(({ Menu }) => Menu.Item));

/** STYLES */
import style from "styles/main.module.scss";

/** COMPONENTS*/
import {images} from "components/assets"


const Desktop = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
            setScrolled(true);
            } else {
            setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll);};
    }, []);

    return (
        <Menu secondary className={[style.navBar, scrolled ? style.navBarScrolled : ""].join(" ")}>
            <div className={style.leftNavBar}>
                <Link href='/'>
                <MenuItem className={style.menu_item} 
                    position="left"
                    name="home"
                >
                <div className={style.zyNavLogo}>
                    <Image
                    src= {images.genericLogoIcon}
                    layout="fill"
                    />
                </div>
                <div className={style.zyNavText}>
                    <Image
                    src= {images.genericLogoText}
                    layout="fill"
                    />
                </div>
                </MenuItem>
                </Link>
            </div>
            <div className={style.rightNavBar}>
                <Link href='/'>
                <MenuItem
                    name="home"
                    className={style.navItem}
                />
                </Link>
                <Link href='/about-us'>
                <MenuItem
                    name="about"
                    className={style.navItem}
                />
                </Link>
                <Link href='/#portfolioContainer'>
                <MenuItem
                    name="portfolio"
                    className={style.navItem}
                />
                </Link>
                <Link href='/#skillsContainer'>
                <MenuItem
                    name="skills"
                    className={style.navItem}
                />
                </Link>
                <Link href='/contact-us'>
                <MenuItem
                    name="contact"
                    className={style.navItem}
                />
                </Link>
            </div>
        </Menu>
    )
}

export default Desktop;