import React, { useEffect, useRef } from 'react';

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
  let audioContext = useRef<AudioContext | null>(null);

  useEffect(() => {
    audioContext.current = new AudioContext();
    // useEffect will ensure that the page is loaded before setting up an audio context.
  }, []);

  console.log(audioContext);

  let playAudio = () => {
    console.log('hit play audio');
  };

  // let osc = audioContext

  return <audio src={url} />;
};
