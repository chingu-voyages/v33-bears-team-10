import React, { useState } from 'react';

/**
 *
 * @param timer must be <= 30
 * @param numberOfSongs defaults to 10
 * @returns playSong() pauseSong()
 */

export const useAudioPlayer = (timer = 10, numberOfSongs = 10) => {
  // type the object of audio's properly.
  const [state, setState] = useState<any>({});
  const [currentSong, setCurrentSong] = useState<{
    song: HTMLAudioElement;
    audioContext: AudioContext;
  } | null>();

  // try to do this without state, eg let ids = {}

  if (!currentSong?.audioContext) {
    console.log('no current song');
  }

  const pauseSong = () => {
    currentSong?.song.pause();

    if (currentSong?.audioContext.state !== 'closed') {
      currentSong?.audioContext?.close();
    }
    setCurrentSong((prevState) => null);
  };

  const playSong = (url: string) => {
    if (currentSong) pauseSong();

    let audioContext = new AudioContext();
    if (audioContext.state === 'suspended') audioContext.resume();

    // create audio, allow crossOrigin on audio.
    let audio = new Audio(url);
    audio.crossOrigin;

    // add audio to state to later pause or remove audio.
    addSongToState(audio, audioContext);

    audio.play();

    // wait before stopping the song, song can be stoped either at base 10 seconds
    setTimeout(() => {
      audio?.pause();
      if (audioContext.state !== 'closed') {
        audioContext.close();
      }
    }, timer * 1000);
  };

  const addSongToState = (
    song: HTMLAudioElement,
    audioContext: AudioContext
  ) => {
    setCurrentSong({ song, audioContext });
  };

  const trilPlaySong = (url: string) => {
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
      state[key].pause();
    }
  };

  return { playSong, pauseAll, pauseSong };
};
