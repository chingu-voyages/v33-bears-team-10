import React from 'react';
import QuizCard from '../components/sections/QuizCard';
import styles from '../styles/QuizSelection.module.scss';
import Link from 'next/Link';
import ArtAnimation from '../components/sections/ArtAnimation';

const imageUrls: [string, string, string, string] = [
  'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
  'https://i.scdn.co/image/ab67616d00001e028cb690f962092fd44bbe2bf4',
  'https://i.scdn.co/image/ab67616d00001e0228933b808bfb4cbbd0385400',
  'https://i.scdn.co/image/ab67616d00001e028cb690f962092fd44bbe2bf4',
];
const QuizSelection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardFirst}>
        <QuizCard
          text='Play a game based on your playlists!'
          imageUrls={imageUrls}
        />
        {/* <div>
          <ArtAnimation imageUrls={imageUrls} />
        </div> */}
      </div>
      <div className={styles.cardSecond}>
        <QuizCard
          text='Play a game based on your top tracks!'
          imageUrls={imageUrls}
        />
      </div>
    </div>
  );
};

export default QuizSelection;
