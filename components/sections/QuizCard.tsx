import React from 'react';
import ArtAnimation from '../sections/ArtAnimation';
import styles from '../../styles/QuizSelection.module.scss';
interface Props {
  text: string;
  imageUrls: [string, string, string, string];
}
const QuizCard: React.FC<Props> = ({ text, imageUrls }) => {
  return (
    <div className={styles.flexContainer}>
      <p>{text}</p>
      <ArtAnimation imageUrls={imageUrls} />
      <button className={styles.button + ' ' + styles.ripple}>Play</button>
    </div>
  );
};

export default QuizCard;
