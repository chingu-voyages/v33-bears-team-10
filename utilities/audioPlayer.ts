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
