import React, { useState, useEffect, useCallback } from 'react';

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
  const [timeLeftInSong, setTimeLeftInSong] = useState(0); // todo: give this a better name, this is counting up until i reach the users timer.

  const pauseSong = () => {
    if (currentSong?.audioContext.state === 'suspended') {
      currentSong.audioContext.resume();
      setPaused(false);
    } else if (currentSong?.audioContext.state === 'running') {
      currentSong?.audioContext.suspend();
      setPaused(true);
    } else if (currentSong?.audioContext.state === 'closed') {
      setCurrentSong(null);
    }
  };

  const endSong = useCallback(() => {
    if (currentSong?.audioContext.state !== 'closed') {
      setPaused(true);
      currentSong?.audioContext?.close();
    }
    setCurrentSong((prevState) => null);
  }, [currentSong?.audioContext]);

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
    gain.gain.exponentialRampToValueAtTime(0.6, audioContext.currentTime + 0.5);
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

  useEffect(() => {
    // todo: this renders 3 times when we're closing out the interval, figure out how to stop timeLeft and pause from re-rendering 3 times
    const countDown = setInterval(() => {
      if (!paused && timeLeftInSong < userTimer) {
        setTimeLeftInSong((prev) => (prev += 1));
      } else if (timeLeftInSong === userTimer) {
        console.log('clearing');
        setPaused(true);
        setTimeLeftInSong(0);
        endSong();
        clearInterval(countDown);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [paused, timeLeftInSong, userTimer, endSong]);

  return { playSong, pauseSong, endSong };
};
