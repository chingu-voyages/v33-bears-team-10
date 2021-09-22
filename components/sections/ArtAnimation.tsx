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
const ArtAnimation: React.FC<Props> = ({ imageUrls }) => {
  return (
    <div
      className={styles.flexContainer}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      // }}
    >
      <div className={styles.img1}>
        {/* <img src={imageUrls[0]} alt="pls work" /> */}

        <Image
          height={imageSpecs.height}
          width={imageSpecs.width}
          layout='fixed'
          src={imageUrls[0]}
          alt='album cover 1'
        />
      </div>

      <div className={styles.img2}>
        {/* <img src={imageUrls[1]} alt='pls work' /> */}
        <Image
          height={imageSpecs.height}
          width={imageSpecs.width}
          layout='intrinsic'
          src={imageUrls[1]}
          alt='album cover 2'
        />
      </div>

      <div className={styles.img3}>
        {/* <img src={imageUrls[2]} alt='pls work' /> */}
        <Image
          height={imageSpecs.height}
          width={imageSpecs.width}
          layout='intrinsic'
          src={imageUrls[2]}
          alt='album cover 3'
        />
      </div>

      <div className={styles.img4}>
        {/* <img src={imageUrls[3]} alt='pls work' /> */}
        <Image
          height={imageSpecs.height}
          width={imageSpecs.width}
          layout='intrinsic'
          src={imageUrls[3]}
          alt='album cover 4'
        />
      </div>
    </div>
  );
};

export default ArtAnimation;
