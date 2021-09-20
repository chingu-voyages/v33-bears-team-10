import React, { useState } from 'react';

export const useAudioPlayer = (timer = 10, numberOfSongs = 10) => {
  // type the object of audio's properly.
  const [state, setState] = useState<any>({});
  const [currentSong, setCurrentSong] = useState<{
    song: HTMLAudioElement;
  } | null>();

  // try to do this without state, eg let ids = {}

  const pauseSong = () => {};

  const playSong = (url: string) => {
    let audioContext = new AudioContext();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    let key = url.slice(9, 15);

    if (state[key]) {
      console.error('key already exists');
      return new Error('key already exists');
    }

    let audio = new Audio(url);
    console.log(key, url);

    // If you save the audio inside of an object, you can reference that later and call methods on it.
    let newPair = { [key]: audio };
    setState({ ...state, ...newPair });
    audio.crossOrigin = 'anonymous';
    console.log('here');
    const source = audioContext.createMediaElementSource(audio);
    source.connect(audioContext.destination);

    state[key].play();
    console.log(state);
    setTimeout(() => {
      state[key].pause();
    }, timer * 1000);
  };

  const pauseAll = () => {
    // state.bells.pause();
    for (let key in state) {
      console.log(state[key]);
      state[key].pause();
    }
  };

  return { playSong, pauseAll };
};
