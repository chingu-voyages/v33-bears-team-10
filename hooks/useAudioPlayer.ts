import React, { useState, useEffect } from 'react';

/**
 *
 * @param timer must be <= 30
 * @param numberOfSongs defaults to 10
 * @returns playSong() pauseSong()
 */

export const useAudioPlayer = (userTimer = 10, numberOfSongs = 10) => {
  // If you save audio and audioContext, you'll be able to refrence and edit them at any time.
  const [currentSong, setCurrentSong] = useState<{
    audio: HTMLAudioElement;
    audioContext: AudioContext;
  } | null>();

  let audioCTX: AudioContext | undefined;

  const pauseSong = () => {
    if (currentSong?.audioContext.state === 'suspended') {
      currentSong.audioContext.resume();
    } else {
      currentSong?.audioContext.suspend();
    }
  };

  const endSong = () => {
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
    audio.crossOrigin = 'anonymous';

    let track = audioContext.createMediaElementSource(audio);

    let gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.001, 0);
    gain.gain.exponentialRampToValueAtTime(0.6, audioContext.currentTime + 1);
    gain.gain.exponentialRampToValueAtTime(0.0001, userTimer);

    track.connect(gain).connect(audioContext.destination);

    // add audio to state to later pause or remove audio.

    setCurrentSong({
      audio,
      audioContext,
    });

    audio.play();
  };

  if (currentSong?.audioContext.state === 'suspended') {
    console.log(currentSong.audioContext.currentTime);
  }
  return { playSong, pauseSong, endSong };
};
