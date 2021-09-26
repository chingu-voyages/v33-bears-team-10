import type { NextPage } from 'next';
import Head from 'next/head';

import ApplicationHero from '../components/sections/ApplicationHero';
import QuizHero from '../components/sections/QuizHero';
import DataHero from '../components/sections/DataHero';
import AboutHero from '../components/sections/AboutHero';

// TODO each 'Hero' section should lead us to their respective pages.

import styles from '../styles/Home.module.scss';
const testAudio =
  'https://p.scdn.co/mp3-preview/de1bf03287866de45384bd67332c9d98e9438aad?cid=774b29d4f13844c495f206cafdad9c86';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpotMe</title>
        <meta name='description' content='SpotMe by bears' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.mainContent}>
        <h2 className={styles.h2container}>Welcome to spotMe!</h2>
        <ApplicationHero />
        <QuizHero />
        <DataHero />
        <AboutHero />
      </main>
    </div>
  );
};

export default Home;
