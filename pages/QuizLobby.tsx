import React from 'react';
import styles from '../styles/QuizLobby.module.scss';

const QuizLobby = () => {
  // redirected here from quizSelection.

  // We will show users here, this will be the start point of an online session aswell (If they're going to play with friends)
  return (
    <div className={styles.pageContainer}>
      <div className={styles.section_1}>
        <div className={styles.albumArt_container}>
          <div className={styles.albumImage}> image here</div>
          <div className={styles.albumImage}> image here</div>
          <div className={styles.albumImage}> image here</div>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.flexContainer}>
          <button className={styles.readyButton}>
            Ready / Not Ready based on session connection
          </button>
        </div>
      </div>
      <div className={styles.section_3}>
        <div className={styles.playerSectionContainer}>
          <div className={styles.playerCard}>
            <div className={styles.playerImageContainer}></div>
          </div>
          <div className={styles.playerCard}>
            <div className={styles.playerImageContainer}></div>
          </div>
          <div className={styles.playerCard}>
            <div className={styles.playerImageContainer}></div>
          </div>
          <div className={styles.playerCard}>
            <div className={styles.playerImageContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLobby;
