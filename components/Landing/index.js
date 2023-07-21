/** LIBRARIES */
import dynamic from "next/dynamic";

import styles from "styles/main.module.scss";
import Image from "next/image";
import {images} from "components/assets"


/** COMPONENTS */
const HomeComponent = dynamic(() => import("components/Landing/Home"));
const ServicesComponent = dynamic(() => import("components/Landing/Services"));
const AboutUsComponent = dynamic(() => import("components/Landing/AboutUs"));
const ProjectsComponent = dynamic(() => import("components/Landing/Projects"));
const SkillsComponent = dynamic(() => import("components/Landing/Skills"));
const TechStackComponent = dynamic(() => import("components/Landing/TechStack"));
const AccomplishmentsComponent = dynamic(() => import("components/Landing/Accomplishments"));

const Landing = () => {
    return (
        <div>
            <HomeComponent />
            <ServicesComponent />
            <AboutUsComponent />
            <ProjectsComponent />
            <AccomplishmentsComponent />
            <SkillsComponent />
            <TechStackComponent />
        </div>
    )
}

export default Landing