import React from 'react';
import { useState } from 'react';
import QuizCard from '../components/sections/QuizCard';
import styles from '../styles/QuizSelection.module.scss';
import axios from 'axios';

const QuizSelection = () => {
  const backendApi = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  });

  const getTopTracks = async () => {
    try {
      const res = await backendApi.get('/api/top/tracks');

      const tracks = res.data.items;
      const images = [];
      for (const track of tracks) {
        images.push(track.album.images[0].url);
      }
      //array of 25 objects
      console.log({ images });
    } catch (error: any) {
      console.error('>>> ERR here', error);
    }
  };
  const initialImages = getTopTracks();
  console.log(initialImages);

  // const [images, setImages] = useState(initialImages);

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <div className={styles.cardFirst}>
          <QuizCard
            text='Play a game based on your playlists!'
            images={['hello']}
          />
        </div>
        <div className={styles.cardSecond}>
          <QuizCard
            text='Play a game based on your top tracks!'
            images={['hello']}
          />
        </div>
      </main>
    </div>
  );
};

export default QuizSelection;
