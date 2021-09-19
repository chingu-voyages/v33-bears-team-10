import React, { useEffect } from 'react';

const testAudio =
  'https://p.scdn.co/mp3-preview/de1bf03287866de45384bd67332c9d98e9438aad?cid=774b29d4f13844c495f206cafdad9c86';

// document.addEventListener('DOMContentLoaded', function () {
//   let audioCtx = new AudioContext();

//   console.log(audioCtx);
// });

const TestPage = () => {
  // we have to set audiocontext creation inside of a useEffect hook because the document does not exist at the time of load.

  useEffect(() => {
    let audioCTX = new AudioContext();

    console.log(audioCTX, 'testpage');
  }, []);

  return <div></div>;
};

export default TestPage;
