import React from 'react';
import styles from '../../styles/QuizHero.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import quizImage from '../../public/undraw-quiz.svg';

// Each hero will host the inner card component and details
// pages/index.tsx will be in charge of the flexbox component

// min -> hero's are cards and index is the card deck box

/**
 * >>> card should show h1 w/ quizz,
 * >>> card should incite user to click and play game
 * >>> card should hover above other cards
 * >>> card should show an image based on the function of the game.
 */

const QuizHero = () => {
  return (
    <div className={styles.quizCardContainer}>
      <div className={styles.flexDetailContainer}>
        <div className={styles.quizGraphicGroup}>
          <h2>Take the quizz!</h2>
          <div className={styles.quizImg}>
            <Image
              height='91'
              width='198'
              layout='fixed'
              src={quizImage}
              alt='QuizImage'
            />
          </div>
        </div>
        <div className={styles.details}>
          <h4>Play a game based on your favorite songs or playlists!</h4>
          <Link href='/QuizSelection'>
            <a className={styles.link}>Play the quiz</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizHero;
