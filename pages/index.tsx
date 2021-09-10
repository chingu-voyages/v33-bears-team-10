import type { NextPage } from 'next';
import Head from 'next/head';
// import Link from 'next/link';
// each 'Hero' section should lead us to their respective pages.

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpotMe</title>
        <meta name='description' content='SpotMe by bears' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h2 className={styles.h2container}>Welcome to spotMe!</h2>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2> Application Hero section </h2>{' '}
        </div>
        <div className={styles.card}>
          <h2> Quizz hero section </h2>{' '}
        </div>
        <div className={styles.card}>
          <h2> Data hero section </h2>{' '}
        </div>
        <div className={styles.card}>
          <h2> About the team hero section </h2>{' '}
        </div>
      </main>
    </div>
  );
};

export default Home;
