import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ArtAnimation.module.scss';
interface Props {
  image: string;
  id: number;
}

const ArtAnimation = ({ image, id }: Props) => {
  const animationDelay = `${id * 4}s`;

  return (
    <div
      className={styles.imgAnimation}
      style={{ animationDelay: animationDelay }}
    >
      <div className={styles.container}>
        <Image layout='fill' src={image} alt={`album cover ${id}`} />
      </div>
    </div>
  );
};

export default ArtAnimation;
