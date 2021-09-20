import React, { useEffect, useState } from 'react';
import { useAudio } from '../hooks/useAudio';
import { audioPlayer } from '../hooks/useAudio';

const TestPage = () => {
  const testAudio =
    'https://p.scdn.co/mp3-preview/de1bf03287866de45384bd67332c9d98e9438aad?cid=774b29d4f13844c495f206cafdad9c86';
  // we have to set audiocontext creation inside of a useEffect hook because the document does not exist at the time of load.

  let audio = audioPlayer();

  console.log(audio.playSong);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => audio.playSong(testAudio)}>testButton</button>
    </div>
  );
};

export default TestPage;
