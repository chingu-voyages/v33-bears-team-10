import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ArtAnimation.module.scss';
interface Props {
  imageUrls: [string, string, string];
}
const imageSpecs = {
  height: 200,
  width: 200,
  // layout: "layout" #!can't use layout for some reason
};
const ArtAnimation: React.FC<Props> = ({ imageUrls }) => {
  return (
    <div className={styles.fadecycle}>
      <img src={imageUrls[0]} alt='not' />
      <img src={imageUrls[1]} alt='not' />
      <img src={imageUrls[0]} alt='not' />
      {/* <Image
                height={imageSpecs.height}
                width={imageSpecs.width}
                layout="intrinsic"
                src={imageUrls[0]}
                alt='album cover 1'
            />
            <Image
                height={imageSpecs.height}
                width={imageSpecs.width}
                layout='intrinsic'
                src={imageUrls[1]}
                alt='album cover 2'
            />
            <Image
                height={imageSpecs.height}
                width={imageSpecs.width}
                layout='intrinsic'
                src={imageUrls[2]}
                alt='album cover 3' */}
    </div>
  );
};

export default ArtAnimation;
