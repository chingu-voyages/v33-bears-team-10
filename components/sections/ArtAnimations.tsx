import React from 'react';
import ArtAnimation from './ArtAnimation';
import styles from '../../styles/ArtAnimation.module.scss';
interface Props {
  images: string[];
}
const ArtAnimations = ({ images }: Props) => {
  return (
    <div className={styles.flexContainer}>
      {images.map((image, index) => (
        <ArtAnimation key={index} id={index} image={image} />
      ))}
    </div>
  );
};

export default ArtAnimations;
