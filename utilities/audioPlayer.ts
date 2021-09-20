import React, { useState } from 'react';

export const useAudioPlayer = (timer = 10, numberOfSongs = 10) => {
  const [state, setState] = useState<any>([]);

  const playSong = (url: string) => {
    let audioContext = new AudioContext();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    let audio = new Audio(url);
    setState([...state, audio]);
    audio.crossOrigin = 'anonymous';
    console.log('here');
    const source = audioContext.createMediaElementSource(audio);
    source.connect(audioContext.destination);
    audio.play();
    console.log(state);
    setTimeout(() => {
      audio.pause();
      state.forEach((audio: HTMLAudioElement) => audio.pause());
    }, timer * 1000);
  };

  const pauseAll = () => {
    for (let audio of state) {
      return audio.pause();
    }
  };

  return { playSong, pauseAll };
};
