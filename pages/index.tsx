import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import TestPage from './TestPage';
import styles from '../styles/Home.module.scss';
import ApplicationHero from '../components/sections/ApplicationHero';
import QuizHero from '../components/sections/QuizHero';
import DataHero from '../components/sections/DataHero';
import AboutHero from '../components/sections/AboutHero';

import { useAuth } from '../hooks/useAuth';

// TODO each 'Hero' section should lead us to their respective pages.

const Home: NextPage = () => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      auth.verifyUser();
    }
  }, [auth]);

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
