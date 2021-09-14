import React from 'react';
import styles from '../../styles/DataHero.module.scss';

import { Doughnut } from 'react-chartjs-2';
import Link from 'next/Link';

const DataHero = () => {
  const labels = [
    'Songs-played-recenty',
    'time-spent-listening',
    'top-song-replays',
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: [
          'rgb(30, 219, 188)',
          `rgb(93, 192, 176)`,
          `rgb(23, 145, 124)`,
          `rgb(21, 194, 165)`,
        ],
        borderColor: 'rgb(99, 255, 255)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: 'My Second dataset',
        backgroundColor: [
          `rgb(23, 145, 124)`,
          `rgb(21, 194, 165)`,
          'rgb(30, 219, 188)',
          'rgb(30, 219, 188)',
          `rgb(93, 192, 176)`,
        ],
        borderColor: 'rgb(99, 255, 255)',
        data: [45, 20, 30, 10, 5, 2, 0],
      },
    ],
  };

  return (
    <div className={styles.dataCardContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.dataChartContainer}>
          <div className={styles.chartContainer}>
            <Doughnut data={data} className={styles.chart} />
          </div>
        </div>
        <div className={styles.dataDetailsContainer}>
          <h2>Look at your data in cool graphs</h2>
          <Link href='/Data'>
            <a className={styles.link}> See your data </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataHero;
