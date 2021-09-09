import type { NextPage } from 'next';
import Head from 'next/head';
// import Link from 'next/link';
// each 'Hero' section should lead us to their respective pages.

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to spotMe!</h1>
        <div className={styles.card}> Application Hero section</div>
        <div className={styles.card}> Quizz hero section </div>
        <div className={styles.card}> Data hero section </div>
        <div className={styles.card}> About the team hero section </div>
      </main>
    </div>
  );
};

export default Home;
