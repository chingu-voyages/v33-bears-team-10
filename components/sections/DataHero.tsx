import React from 'react';
import styles from '../../styles/DataHero.module.scss';

const DataHero = () => {
  return (
    <div className={styles.dataCardContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.dataGraphContainer}></div>
        <div className={styles.dataDetailsContainer}></div>
      </div>
    </div>
  );
};

export default DataHero;
