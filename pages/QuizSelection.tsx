import React from 'react';
import { useState, useEffect } from 'react';
import QuizCard from '../components/sections/QuizCard';
import styles from '../styles/QuizSelection.module.scss';
import axios from 'axios';

interface Image {
  imageURL: string;
  songTitle: string;
}

const QuizSelection = () => {
  const backendApi = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  });
  const [images, setImages] = useState<Image[]>([]);

  const fetchTopTracks = async () => {
    try {
      const { data } = await backendApi.get('/api/top/tracks');

      const tracks = data.items;
      const imagesFromServer: Image[] = [];

      for (const track of tracks) {
        let Image: Image = {
          imageURL: track.album.images[0].url,
          songTitle: track.name,
        };
        imagesFromServer.push(Image);
      }
      const uniqueImagesFromServer = imagesFromServer.filter(
        (v, i, a) => a.findIndex((t) => t.imageURL === v.imageURL) === i
      );
      setImages(uniqueImagesFromServer);
    } catch (error: any) {
      console.error('>>> ERR here', error);
    }
  };

  useEffect(() => {
    fetchTopTracks();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <div className={styles.cardFirst}>
          <QuizCard
            text='Play a game based on your playlists!'
            images={images}
          />
        </div>
        <div className={styles.cardSecond}>
          <QuizCard
            text='Play a game based on your top tracks!'
            images={images}
          />
        </div>
      </main>
    </div>
  );
};

export default QuizSelection;
