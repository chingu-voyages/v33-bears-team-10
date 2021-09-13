import React from 'react';
import styles from '../styles/Nav.module.scss';
import Link from 'next/Link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navUl}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/QuizSelection'>
            <a>Quiz</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Data</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>About</a>
          </Link>
        </li>
        <div className={styles.hamburger}></div>
      </ul>
    </nav>
  );
};

export default Nav;
