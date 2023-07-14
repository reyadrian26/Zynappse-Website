/** COMPONENTS */
import { getLocalizedString } from "strings";
import { images } from "components/assets";

/** STYLES */
import style from "styles/main.module.scss";

export const SERVICES_DATA = [
  {
    id: "mobileApps01",
    count: 1,
    image: images.servicesPhoneImage,
  },
  {
    id: "webEcommerce02",
    count: 2,
    image: images.servicesECommerceImage,
  },
  {
    id: "cloudDatabaseManagement03",
    count: 3,
    image: images.servicesTabletImage,
  },
  {
    id: "artificialIntelligence04",
    count: 4,
    image: images.servicesAIImage,
  },
  {
    id: "augmentedReality05",
    count: 5,
    image: images.servicesPCImage,
  },
];

export const SERVICES_MOTION_DIV = (props) => {

  let {
    activeLabel,
    setActiveLabel,
    setGetData
  } = props;

  return [
    {
      active: activeLabel === "mobileApps",
      handleClick: () => {
        setActiveLabel("mobileApps")
        setGetData("mobileApps01")
      },
      initial: activeLabel === "mobileApps" ? "active" : "inactive",
      mainAnimate: activeLabel === "mobileApps" ? "active" : "inactive",
      subAnimate: activeLabel === "mobileApps" ? "after" : "before",
      mainLabel: getLocalizedString("SERVICES_MOBILE_LABEL"),
      subLabel: getLocalizedString("SERVICES_APPS_LABEL")
    },
    {
      active: activeLabel === "webEcommerce" ? style.active : "",
      handleClick: () => {
        setActiveLabel("webEcommerce")
        setGetData("webEcommerce02")
      },
      initial: activeLabel === "webEcommerce" ? "active" : "inactive",
      mainAnimate: activeLabel === "webEcommerce" ? "active" : "inactive",
      subAnimate: activeLabel === "webEcommerce" ? "after" : "before",
      mainLabel: getLocalizedString("SERVICES_WEB_AND_LABEL"),
      subLabel: getLocalizedString("SERVICES_ECOMMERCE_LABEL")
    },
    {
      active: activeLabel === "cloudDatabaseManagement" ? style.active : "",
      handleClick: () => {
        setActiveLabel("cloudDatabaseManagement")
        setGetData("cloudDatabaseManagement03")
      },
      initial: activeLabel === "cloudDatabaseManagement" ? "active" : "inactive",
      mainAnimate: activeLabel === "cloudDatabaseManagement" ? "active" : "inactive",
      subAnimate: activeLabel === "cloudDatabaseManagement" ? "after" : "before",
      mainLabel: getLocalizedString("SERVICES_CLOUD_AND_LABEL"),
      subLabel: getLocalizedString("SERVICES_DATABASE_MANAGEMENT_LABEL")
    },
    {
      active: activeLabel === "artificialIntelligence" ? style.active : "",
      handleClick: () => {
        setActiveLabel("artificialIntelligence")
        setGetData("artificialIntelligence04")
      },
      initial: activeLabel === "artificialIntelligence" ? "active" : "inactive",
      mainAnimate: activeLabel === "artificialIntelligence" ? "active" : "inactive",
      subAnimate: activeLabel === "artificialIntelligence" ? "after" : "before",
      mainLabel: getLocalizedString("SERVICES_ARTIFICIAL_LABEL"),
      subLabel: getLocalizedString("SERVICES_INTELLIGENCE_LABEL")
    },
    {
      active: activeLabel === "augmentedReality" ? style.active : "",
      handleClick: () => {
        setActiveLabel("augmentedReality")
        setGetData("augmentedReality05")
      },
      initial: activeLabel === "augmentedReality" ? "active" : "inactive",
      mainAnimate: activeLabel === "augmentedReality" ? "active" : "inactive",
      subAnimate: activeLabel === "augmentedReality" ? "after" : "before",
      mainLabel: getLocalizedString("SERVICES_AUGMENTED_LABEL"),
      subLabel: getLocalizedString("SERVICES_REALITY_LABEL")
    }
  ]
}
