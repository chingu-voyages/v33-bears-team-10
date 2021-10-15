import React from 'react';
import ArtAnimations from '../sections/ArtAnimations';
import styles from '../../styles/QuizSelection.module.scss';
interface Image {
  imageURL: string;
  songTitle: string;
}
interface Props {
  text: string;
  images: Image[];
}
const QuizCard = ({ text, images }: Props) => {
  return (
    // <div className={styles.flexContainer}>
    <div>
      <p>{text}</p>
      <ArtAnimations images={images} />
      <button className={styles.button + ' ' + styles.ripple}>Play</button>
    </div>
  );
};

export default QuizCard;
