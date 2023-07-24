/** SEMANTIC UI COMPONENTS */
import { ListItem } from "components/generics/SemanticUIReact";
import { Icon } from "semantic-ui-react";
import style from "styles/main.module.scss";
import Image from 'next/image';

const servicesArr = ["MOBILE APPS", "WEB AND E-COMMERCE", "CLOUD AND DATABASE MANAGEMENT"];
export const servicesMap = servicesArr.map((service, index) =>
    <ListItem className={style.footerItem} key={index}>{service}</ListItem>
)

const skillsArr = ["ANDROID", "IOS", "WEB"];
export const skillsMap = skillsArr.map((skill, index) =>
    <ListItem className={style.footerItem} key={index}>{skill}</ListItem>
)

const contactArr = [
    {
        contact: "Unit 202 2nd Floor #19 Libertad Plaza Building Libertad Street, Brgy. Highway Hills Mandaluyong City 1550",
        icon: 'map marker alternate',
        style: ""
    },
    {
        contact: "+63. 8. 291-4837",
        icon: 'phone',
        style: style.phoneIcon
    },
    {
        contact: "hi@zynappse.com",
        icon: 'mail',
        style: ""
    },
];
export const contactMap = contactArr.map((con, index) =>
    <ListItem className={[style.footerItem, con.style].join(" ")} key={index} icon={con.icon} content={con.contact} />
)