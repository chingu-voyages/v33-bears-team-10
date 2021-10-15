import React from 'react';
import ArtAnimation from './ArtAnimation';
import styles from '../../styles/ArtAnimation.module.scss';

interface Image {
  imageURL: string;
  songTitle: string;
}

interface Props {
  images: Image[];
}

const ArtAnimations = ({ images }: Props) => {
  return (
    <div className={styles.flexContainer}>
      {/* <button onClick={() => testGetTopTracks()}>TEST</button> */}
      {images.map((image, index) => (
        <ArtAnimation
          key={index}
          id={index}
          imageURL={image.imageURL}
          songTitle={image.songTitle}
        />
      ))}
    </div>
  );
};

export default ArtAnimations;
