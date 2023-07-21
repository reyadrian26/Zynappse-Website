import styles from "styles/main.module.scss";
import Projects from "components/Landing/Projects";
import { CarouselItems } from "./CarouselItems";
import { carouseldata } from "./ArrayofData";
import { useState, useEffect } from "react";

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
    return <Projects />;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.FlexContainer}>
        {" "}
        <div className={styles.Heading}>Some of our Projects</div>
        <div className={styles.Button} onClick={handleViewAllClick}>
          View All
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
