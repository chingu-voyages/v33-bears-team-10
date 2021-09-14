import React from 'react';
import styles from '../../styles/AboutHero.module.scss';
import Link from 'next/Link';
import Image from 'next/image';
import Team_Illustration from '../../public/Team_Illustration.svg';

const AboutHero = () => {
  return (
    <div className={styles.aboutCardContainer}>
      <div className={styles.flexColContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.teamContainer}>
            <div className={styles.teamImageContainer}>
              <Image
                className={styles.image}
                layout='responsive'
                width={170}
                height={195}
                src={Team_Illustration}
                alt='TeamImage'
              />
            </div>
          </div>
          <div className={styles.teamDetailsContainer}>
            <h4>learn more about our motivation!</h4>
            <Link href='/about'>
              <a className={styles.link}>Check us out</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
