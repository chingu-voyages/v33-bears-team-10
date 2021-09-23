import React from 'react';
import ArtAnimation from '../sections/ArtAnimation';
import styles from '../../styles/QuizSelection.module.scss';
interface Props {
  text: string;
  imageUrls: [string, string, string, string];
}
const QuizCard: React.FC<Props> = ({ text, imageUrls }) => {
  return (
    <div>
      <p>{text}</p>
      <div>
        <ArtAnimation imageUrls={imageUrls} />
      </div>
      <button className={styles.button + ' ' + styles.ripple}>Play</button>
    </div>
  );
};

export default QuizCard;
