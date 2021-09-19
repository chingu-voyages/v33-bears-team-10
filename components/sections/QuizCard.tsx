import React from 'react';
import ArtAnimation from '../sections/ArtAnimation';
import styles from '../../styles/QuizSelection.module.scss';
interface Props {
  text: string;
  imageUrls: [string, string, string, string];
}
const QuizCard: React.FC<Props> = ({ text, imageUrls }) => {
  return (
    <div className={styles.QuizCard}>
      <p>{text}</p>
      <div style={{ margin: 'auto auto' }}>
        <div>
          <ArtAnimation imageUrls={imageUrls} />
        </div>
      </div>
      <button className={styles.button + ' ' + styles.ripple}>Play</button>
    </div>
  );
};

export default QuizCard;
