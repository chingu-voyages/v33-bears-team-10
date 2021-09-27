import React, { useEffect, useState } from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useAuth } from '../hooks/useAuth';

const TestPage = () => {
  const testAudio =
    'https://p.scdn.co/mp3-preview/7850aadbb39c36c9e2df41aaeeee3bc5fb915426?cid=af66e62b15fb4bcdbcb5bdf1ead916ba';

  let audio = useAudioPlayer(5);

  const auth = useAuth();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* <button onClick={() => auth.testGetTopTracks()}>
        Test get top tracks
      </button> */}
      {auth.SigninLink}
      <button onClick={() => audio.playSong(testAudio)}>play audio</button>
      <button onClick={() => audio.pauseSong()}>pause Song Playback</button>
      <button onClick={() => audio.endSong()}>preemptivly end song</button>
      <button onClick={() => auth.verifyUser()}> Verify user </button>
    </div>
  );
};

export default TestPage;
