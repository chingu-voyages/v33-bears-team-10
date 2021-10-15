import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ArtAnimation.module.scss';

interface Image {
  imageURL: string;
  songTitle: string;
}
interface Props {
  id: number;
  imageURL: string;
  songTitle: string;
}

const ArtAnimation = ({ id, imageURL, songTitle }: Props) => {
  const animationDelay = `${id * 4}s`;

  return (
    <div
      className={styles.imgAnimation}
      style={{ animationDelay: animationDelay }}
    >
      <div className={styles.container}>
        <Image
          layout='fill'
          src={imageURL}
          alt={`album cover for ${songTitle}`}
        />
      </div>
    </div>
  );
};

export default ArtAnimation;
