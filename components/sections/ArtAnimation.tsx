import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ArtAnimation.module.scss';
interface Props {
  image: string;
  id: number;
}
// const animationDelay = '0s';
const ArtAnimation = ({ image, id }: Props) => {
  const animationDelay = `${id * 4}s`;
  console.log(animationDelay);

  return (
    <div className={styles.imgAnimation}>
      <div style={{ animationDelay: animationDelay }}>
        <div className={styles.container}>
          <Image layout='fill' src={image} alt='album cover 1' />
        </div>
      </div>
    </div>
  );
};

export default ArtAnimation;
