import styles from "styles/main.module.scss";
import NewProjects from "components/New-Projects-page";
import { CarouselItems } from "./CarouselItems";
import { carouseldata } from "./ArrayofData";
import { useState, useEffect } from "react";
import {images} from "components/assets"
import {getLocalizedString} from "strings"

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNewProject, setShowNewProject] = useState(false);

  const updateIndex = (newIndex) => {
    const lastIndex = carouseldata.length - 1;
    if (newIndex < 0) {
      newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  //AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const handleViewAllClick = () => {
    setShowNewProject(true);
  };

  if (showNewProject) {
    return <NewProjects />;
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.FlexContainer}>
        {" "}
        <div className={styles.Heading}>Some of our Projects</div>
        <div className={styles.Button} onClick={handleViewAllClick}>
          {getLocalizedString("ABOUT_US_VIEW_ALL_BUTTON_LABEL")}
        </div>
      </div>

      <div className={styles.CarouselContainer}>
        <div
          className={styles.Inner}
          style={{ transform: `translate(-${activeIndex * 25}%)` }}
        >
          {carouseldata.map((item) => {
            return <CarouselItems item={item} key={item.projectID} />;
          })}
        </div>
        <div
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className={styles.ArrowContainer}
        >
          <div className={styles.Arrow}>➜</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
