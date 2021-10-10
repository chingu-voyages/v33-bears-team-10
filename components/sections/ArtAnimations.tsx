import React from 'react';
import Image from 'next/image';
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
      {/* <div className={styles.img1}>
        <div className={styles.container}>
          <Image layout='fill' src={imageUrls[0]} alt='album cover 1' />
        </div>
      </div>

      <div className={styles.img2}>
        <div className={styles.container}>
          <Image layout='fill' src={imageUrls[1]} alt='album cover 2' />
        </div>
      </div>

      <div className={styles.img3}>
        <div className={styles.container}>
          <Image layout='fill' src={imageUrls[2]} alt='album cover 3' />
        </div>
      </div>

      <div className={styles.img4}>
        <div className={styles.container}>
          <Image layout='fill' src={imageUrls[3]} alt='album cover 4' />
        </div>
      </div> */}
    </div>
  );
};

export default ArtAnimations;
