import React from 'react';
import ArtAnimation from '../sections/ArtAnimation';
import styles from '../../styles/QuizSelection.module.scss';
interface Props {
  text: string;
  imageUrls: [string, string, string, string];
}
const QuizCard = ({ text, imageUrls }: Props) => {
  return (
    <div>
      <p>{text}</p>
      <div className={styles.flexContainer}>
        <ArtAnimation imageUrls={imageUrls} />
      </div>
      <button className={styles.button + ' ' + styles.ripple}>Play</button>
    </div>
  );
};

export default QuizCard;
