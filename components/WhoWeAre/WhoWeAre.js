import React, { useState, useEffect } from 'react';
import { Segment, Grid, Header, Image, Button, Icon } from 'semantic-ui-react';
import styles from './WhoWeAre.module.scss';
import { useInView } from 'react-intersection-observer';

const WhoWeAre = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileView(width < 425);
      setIsTabletView(width >= 425 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Segment vertical className={styles.WhoContainer}>
    <div ref={ref}></div>
      <Header
        as='h2'
        textAlign='center'
        className={`${styles.title} ${inView ? styles.animateTitle : ''}`}
      >
        Who We Are
      </Header>
      <Segment vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            {!(isMobileView || isTabletView) && (
              <Grid.Column floated='center' width={6} className={styles.imageContainer}>
                <Segment className={styles.image}>
                  <Image
                    src='/experience.png'
                    alt='White Image'
                    layout='responsive'
                    width={600}
                    height={500}
                  />
                  <Segment className={styles.bottomSegment}>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate distinctio veniam deserunt? Necessitatibus laboriosam asperiores fugiat.
                    </p>                
                  </Segment>
                </Segment>
              </Grid.Column>
            )}
            <Grid.Column floated='right' width={!(isMobileView || isTabletView) ? 8 : 16}>
              <Segment basic className={styles.partners}>
                <Header as='h3'>WHY CHOOSE US AS PARTNERS</Header>
                <p style={{ color: '#7e7e7e'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in obcaecati vero reprehenderit, commodi illo accusamus nostrum, quis nobis doloremque beatae veniam facilis. Vero esse odio illo officia voluptatem eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem ex, rem incidunt vitae labore blanditiis omnis! Itaque autem, sed, maiores quos, dolorem officiis provident voluptatibus in sint accusantium quia.   
                </p>
              </Segment>
              <Segment basic className={styles.whyChoose}>
                <div className={styles.slideFromRight}>
                  <Header as='h3'>Lorem ipsum dolor sit amet consectetur</Header>
                  <p style={{ color: '#7e7e7e'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ipsum minima itaque, a cupiditate impedit praesentium eius eum optio sunt, cum assumenda tempore, nostrum sit maiores fugiat consequuntur iste ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores reiciendis cum illum non nam, atque est doloribus earum, delectus, autem vero dolore! Blanditiis minima, unde aspernatur quae culpa ipsum?
                  </p>
                </div>
              </Segment>
              <div className={styles.buttonContainer}>
                <Button color='red'>Know more about us</Button>
              </div>
              <Segment basic className={styles.checkIcons}>
                <Icon name='check' color='red' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                <Icon name='check' color='red' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                <Icon name='check' color='red' /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Segment>
  );
};

export default WhoWeAre;