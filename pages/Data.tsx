import React from 'react';
import DataCard from '../components/sections/DataCard';
import styles from '../styles/Data.module.scss';
const Data = () => {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <div className={styles.cardFirst}>
            <DataCard />
          </div>
          <div className={styles.cardSecond}>
            <DataCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Data;
