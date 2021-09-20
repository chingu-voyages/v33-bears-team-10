import React, { useState } from 'react';

/**
 *
 * @param timer must be <= 30
 * @param numberOfSongs defaults to 10
 * @returns playSong() pauseSong()
 */

export const useAudioPlayer = (timer = 10, numberOfSongs = 10) => {
  // If you save audio and audioContext, you'll be able to refrence and edit them at any time.
  const [currentSong, setCurrentSong] = useState<{
    audio: HTMLAudioElement;
    audioContext: AudioContext;
  } | null>();

  const pauseSong = () => {
    if (currentSong?.audio.paused) {
      currentSong.audio.play();
    } else {
      currentSong?.audio.pause();
    }
  };

  const endSong = () => {
    currentSong?.audio.pause();
    if (currentSong?.audioContext.state !== 'closed') {
      currentSong?.audioContext?.close();
    }
    setCurrentSong((prevState) => null);
  };

  const playSong = (url: string) => {
    if (currentSong) endSong();

    // audioContext doesnt do much yet, but we'll be able to change and switchup how the audio fades in and fades out.
    let audioContext = new AudioContext();
    if (audioContext.state === 'suspended') audioContext.resume();

    // create audio, allow crossOrigin on audio.
    let audio = new Audio(url);
    audio.crossOrigin;

    // add audio to state to later pause or remove audio.
    setCurrentSong({ audio, audioContext });

    audio.play();

    // wait before stopping the song, song can be stoped either at base 10 seconds
    setTimeout(() => {
      pauseSong();
    }, timer * 1000);
  };

  return { playSong, pauseSong, endSong };
};
