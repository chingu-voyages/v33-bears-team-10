import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ArtAnimation.module.scss';
interface Props {
  imageUrls: [string, string, string, string];
}
const imageSpecs = {
  height: 200,
  width: 200,
};
const ArtAnimation = ({ imageUrls }: Props) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.img1}>
        <Image
          height={imageSpecs.height}
          width={imageSpecs.width}
          layout='fill'
          src={imageUrls[0]}
          alt='album cover 1'
        />
      </div>

      <div className={styles.img2}>
        <Image
          height={imageSpecs.height}
          width={imageSpecs.width}
          layout='fill'
          src={imageUrls[1]}
          alt='album cover 2'
        />
      </div>

      <div className={styles.img3}>
        <Image
          height={imageSpecs.height}
          width={imageSpecs.width}
          layout='fill'
          src={imageUrls[2]}
          alt='album cover 3'
        />
      </div>

      <div className={styles.img4}>
        <Image
          height={imageSpecs.height}
          width={imageSpecs.width}
          layout='fill'
          src={imageUrls[3]}
          alt='album cover 4'
        />
      </div>
    </div>
  );
};

export default ArtAnimation;
