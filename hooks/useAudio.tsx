import React, { useEffect, useRef, useState } from 'react';

/**
 * use audio should accept a song's url to the mp3 file and return a new audio instance with controls to control that instance.
 *
 * eg: const song = useAudio()
 *
 * song.play('url here')
 * song.stop()
 * song.pause()
 *
 * If adding a queue, consider giving each song an id.
 * song.queue('url')
 * song.dequeue('')
 *
 * songs should be paused before moving onto the next song instance.
 * songs should have an audio slider option
 * eg:
 * song.volume(num:number)
 * song.mute(song.volume(0)) <- toggle?
 *
 */

export const useAudio = (url: string) => {
  const [loaded, setLoaded] = useState(false);
  let audioContext = useRef<AudioContext | null>(null);

  useEffect(() => {
    audioContext.current = new AudioContext();
    setLoaded((prevState) => !prevState);
    // useEffect will ensure that the page is loaded before setting up an audio context.
  }, []);
  console.log(audioContext.current, 'context');

  // testplayaudio gives us an example of what's possible with webAudio's api
  let testPlayAudio = () => {
    if (!audioContext.current) {
      return 'Error in playing audio';
    }

    let audioCtx = audioContext.current;

    let gain = audioCtx.createGain();
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.9);

    let osc = audioCtx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = 350;
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 1);
    osc.start();

    osc.stop(audioCtx.currentTime + 1);
    osc.connect(gain).connect(audioCtx.destination);

    return 'finished';
  };

  let returnAudioFromUrl = () => {
    let audio = new Audio(url);
    audio.play();
    setTimeout(() => audio.pause(), 5000);
  };

  console.log(audioContext.current?.state);

  if (audioContext.current?.state === 'suspended') {
    audioContext.current.resume();
    console.log(audioContext.current?.state);
  }
  return loaded ? returnAudioFromUrl() : 'bungo';
  // return <audio src={url} autoPlay />;
};
