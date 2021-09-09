import React, { ReactNode } from 'react';
import { AppProps } from '../interfaces';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }: AppProps) => {
  return (
    <>
      <nav className={styles.nav}> Nav Component here </nav>
      <div>{children}</div>
      <footer> Footer component here</footer>
    </>
  );
};

export default Layout;
