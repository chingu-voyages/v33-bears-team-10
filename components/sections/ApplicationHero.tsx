import React from 'react';
import styles from '../../styles/ApplicationHero.module.scss';

const ApplicationHero = () => {
  return (
    <div className={styles.applicationCardContainer}>
      <div className={styles.callToAction__container}>
        <h1 className={styles.callToAction}>Play a game about __you__</h1>
      </div>
    </div>
  );
};

export default ApplicationHero;
