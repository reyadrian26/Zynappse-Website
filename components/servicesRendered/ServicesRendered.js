import React, { useState, useEffect } from "react";
import style from "./ServicesRendered.module.scss";
import Image from "next/image";
import { Container, Transition, Card, Icon } from "semantic-ui-react";
import servicesData from "./ServicesData";
import thirdCardImage from "../../assets/thirdCardImage.png";
import { useInView } from "react-intersection-observer";

const ServicesRendered = () => {
  const numberOfSets = 9;

  const [showCardB, setShowCardB] = useState(new Array(numberOfSets).fill(false));
  const [showCardC, setShowCardC] = useState(new Array(numberOfSets).fill(false));
  const [animatedCards, setAnimatedCards] = useState(new Array(numberOfSets).fill(false));

  const handleCardAHover = (setNumber) => {
    const newShowCardB = [...showCardB];
    newShowCardB[setNumber] = true;
    setShowCardB(newShowCardB);
  };

  const handleCardAClick = (setNumber) => {
    const newShowCardC = [...showCardC];
    newShowCardC[setNumber] = true;
    setShowCardC(newShowCardC);
  };

  const handleCardASecondClick = (setNumber) => {
    const newShowCardB = [...showCardB];
    const newShowCardC = [...showCardC];

    newShowCardB[setNumber] = false;
    newShowCardC[setNumber] = false;

    setShowCardB(newShowCardB);
    setShowCardC(newShowCardC);
  };

  const handleCardAThirdClick = (setNumber) => {
    if (showCardC[setNumber]) {
      handleCardASecondClick(setNumber);
    } else {
      handleCardAClick(setNumber);
    }
  };

  const renderServiceContent = (services, index) => {
    const iconColors = [
      style.goldIcon,
      style.greenIcon,
      style.orangeIcon,
      style.cyanIcon,
      style.redIcon,
      style.blueIcon,
      style.maroonIcon,
      style.darkGreenIcon,
    ];
    const iconColorIndex = index % iconColors.length;

    return services.map((service, index) => (
      <Card.Content key={index} className={style.serviceContainer}>
        <Card.Header className={style.serviceHeader}>
          <Icon
            name={service.icon}
            className={`${style.servicesIcon} ${iconColors[iconColorIndex]}`}
          />{" "}
          {service.title}
        </Card.Header>
        <Card.Description className={style.serviceDescription}>
          {service.description}
        </Card.Description>
      </Card.Content>
    ));
  };

  return (
    <>
      {Array.from({ length: numberOfSets }, (_, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        useEffect(() => {
          if (inView) {
            const newAnimatedCards = [...animatedCards];
            newAnimatedCards[index] = true;
            setAnimatedCards(newAnimatedCards);
          }
        }, [inView, index]);

        return (
          <div ref={ref} key={index}>
            <Container
              className={`cardsContainer ${index % 2 === 0 ? "" : "flushRight"} ${
                animatedCards[index] ? (index % 2 === 0 ? "animateCardLeft" : "animateCardRight") : ""
              }`}
            >
              <div>
                <Card
                  className={`${style.mainCard} main-card-${index + 1}`}
                  onMouseEnter={() => handleCardAHover(index)}
                  onClick={() => handleCardAThirdClick(index)}
                  style={{ marginBottom: "20px" }}
                >
                  <Card.Content className={style.cardContent}>
                    <Image
                      className="clientLogo"
                      src={servicesData[index].logo}
                      width={300}
                      height={300}
                      objectFit="contain"
                      alt={servicesData[index].clientName}
                    />

                    <Card.Content className={style.clientDetails}>
                      <Card.Header className={style.clientName}>
                        {servicesData[index].clientName}
                      </Card.Header>
                      <Card.Description className={style.description}>
                        {servicesData[index].description}
                      </Card.Description>
                    </Card.Content>
                    <Container className="bottomIcons">
                      <Icon
                        inverted
                        color="white"
                        name="server"
                        className={style.icon}
                      />
                      <Icon
                        inverted
                        color="white"
                        name="computer"
                        className={style.icon}
                      />
                      <Icon
                        inverted
                        color="white"
                        name="mobile alternate"
                        className={style.icon}
                      />
                    </Container>
                  </Card.Content>
                </Card>
              </div>
              <Transition
                visible={showCardB[index]}
                animation={index % 2 === 0 ? "fade right" : "fade left"}
                duration={200}
              >
                <Card
                  className={`${style.secondCard} second-card second-card-${
                    index + 1
                  }`}
                  onClick={() => handleCardAClick(index)}
                  style={{ marginBottom: "20px" }}
                >
                  <Card.Content className={style.secondCardContent}>
                    <Card.Header className={style.secondCardHeader}>
                      SERVICES RENDERED FOR CLIENT
                    </Card.Header>
                    {renderServiceContent(
                      [
                        {
                          title: "SERVICE 1",
                          description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                          icon: "mobile alternate",
                        },
                        {
                          title: "SERVICE 2",
                          description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                          icon: "computer",
                        },
                        {
                          title: "SERVICE 3",
                          description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                          icon: "server",
                        },
                      ],
                      index
                    )}
                  </Card.Content>
                </Card>
              </Transition>

              <Transition
                visible={showCardC[index]}
                animation={index % 2 === 0 ? "fade right" : "fade left"}
                duration={200}
              >
                <Card
                  className={`${style.thirdCard} third-card third-card-${
                    index + 1
                  }`}
                  onClick={() => handleCardASecondClick(index)}
                  style={{ marginBottom: "20px" }}
                >
                  <Card.Content>
                    <Card.Header className={style.thirdCardHeader}>
                      Lorem ipsum dolor
                      <Card.Header className={style.thirdCardHeader2}>
                        sit amet, consectetur
                      </Card.Header>
                    </Card.Header>
                    <Card.Content className={style.phoneImageContainer}>
                      <Image
                        src={thirdCardImage}
                        className={style.phoneImage}
                        width={300}
                      />
                    </Card.Content>
                  </Card.Content>
                </Card>
              </Transition>
            </Container>
          </div>
        );
      })}
    </>
  );
};

export default ServicesRendered;
