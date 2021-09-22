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

  const [paused, setPaused] = useState(true);
  const [timeLeftInSong, setTimeLeftInSong] = useState(0);

  useEffect(() => {
    console.log('outer useEffect');
    let pauseTimeout: NodeJS.Timer;

    if (!paused && currentSong?.audioContext.state !== 'closed') {
      console.log('creating interval');
      pauseTimeout = setInterval(() => {
        setTimeLeftInSong((prev) => (prev += 1));
      }, 1000);
    }
    return () => {
      console.log('>>> in cleanup', { timeLeftInSong });
      console.log(pauseTimeout);
      // check if we're paused, aswell as if there is a timeout already here.
      console.log(paused);
      if (paused) {
        console.log('timeout');
        clearInterval(pauseTimeout);
      } else if (timeLeftInSong === userTimer) {
        console.log(`we are done here ${timeLeftInSong}`);
        setPaused(true);
        console.log('clearing interval...');
        clearInterval(pauseTimeout);
        console.log('closing context...');
        currentSong?.audioContext.close();
        setTimeLeftInSong(0);
      }
    };
  }, [paused, timeLeftInSong, userTimer, currentSong]);

  let audioCTX: AudioContext | undefined;

  const pauseSong = () => {
    if (currentSong?.audioContext.state === 'suspended') {
      currentSong.audioContext.resume();
      setPaused(false);
    } else {
      currentSong?.audioContext.suspend();
      setPaused(true);
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
    setPaused(false);
  };

  // if (currentSong?.audioContext.state === 'suspended') {
  //   console.log(currentSong.audioContext.currentTime);
  // }
  return { playSong, pauseSong, endSong };
};
