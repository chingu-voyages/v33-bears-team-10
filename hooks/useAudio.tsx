import React from 'react';

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
  // let AudioContext = window.AudioContext || window.webkitAudioContext;
  // var audioCtx = new AudioContext();
  // console.log(audioCtx);
  // return <audio src={url} />;
};
