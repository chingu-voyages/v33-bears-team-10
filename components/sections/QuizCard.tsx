import React from 'react';
import ArtAnimation from '../sections/ArtAnimation';
import styles from '../../styles/QuizSelection.module.scss';
import Link from 'next/link';
interface Props {
  text: string;
  imageUrls: string[];
}
const QuizCard = ({ text, imageUrls }: Props) => {
  return (
    // <div className={styles.flexContainer}>
    <div>
      <p>{text}</p>
      <ArtAnimation imageUrls={imageUrls} />
      <Link href='/QuizLobby'>
        <a className={styles.button + ' ' + styles.ripple}>Play</a>
      </Link>
    </div>
  );
};

export default QuizCard;
