import React, { useEffect, useState } from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

const TestPage = () => {
  const testAudio =
    'https://p.scdn.co/mp3-preview/de1bf03287866de45384bd67332c9d98e9438aad?cid=774b29d4f13844c495f206cafdad9c86';

  let audio = useAudioPlayer(5);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => audio.playSong(testAudio)}>testButton</button>
      <button onClick={() => audio.pauseSong()}>pause all playBack</button>
      <button onClick={() => audio.endSong()}>preemptivly end song</button>
    </div>
  );
};

export default TestPage;
