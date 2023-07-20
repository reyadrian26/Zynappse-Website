/** STYLES */
import style from "styles/main.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";

/** SEMANTIC */
const Menu = dynamic(() => import("semantic-ui-react").then(({ Menu }) => Menu));
const MenuItem = dynamic(() => import("semantic-ui-react").then(({ Menu }) => Menu.Item));

const Content = (props) => {

  let {
    isBurgerClicked,
  } = props;

  return (
    <div 
      className={style.headerMobileContent}
      data-open={isBurgerClicked}
    >
      <div className={style.mobNavBar}>
        <Menu vertical className={style.mobMenu}>
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
        </Menu>
      </div>
    </div>
  )
}

export default Content