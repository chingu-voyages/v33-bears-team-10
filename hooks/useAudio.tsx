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
  // let audioContext = useRef<AudioContext | null>(null);

  useEffect(() => {
    setLoaded((prevState) => !prevState);
    // audioContext. = new AudioContext();
    // useEffect will ensure that the page is loaded before setting up an audio context.
  }, []);

  if (!loaded) {
    return;
  }

  let audioContext = new AudioContext();

  // testplayaudio gives us an example of what's possible with webAudio's api
  let testPlayAudio = () => {
    if (!audioContext) {
      return 'Error in playing audio';
    }

    let audioCtx = audioContext;

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
    setTimeout(() => audio.pause(), 10000);
  };

  let adjustedAudio = () => {};

  if (audioContext.state === 'suspended') {
    audioContext.resume();
    console.log(audioContext.state);
  }
  return loaded ? returnAudioFromUrl() : null;

  // return <audio src={url} autoPlay />;
};

export const audioPlayer = (timer = 10, numberOfSongs = 10) => {
  const playSong = (url: string) => {
    let audioContext = new AudioContext();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    let audio = new Audio(url);
    audio.crossOrigin = 'anonymous';
    console.log('here');
    const source = audioContext.createMediaElementSource(audio);
    source.connect(audioContext.destination);
    audio.play();
    setTimeout(() => audio.pause(), timer * 1000);
  };

  return { playSong: playSong };
};
