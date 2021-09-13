import React, { useState, useRef } from 'react';
import styles from '../styles/Nav.module.scss';
import Link from 'next/Link';
import useOnClickOutside from '../hooks/useOnClickOutside';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const node = useRef(null);

  useOnClickOutside(node, () => setNavOpen(false));

  const toggleNav = () => {
    setNavOpen((prevState) => !prevState);
  };

  let navClassname = navOpen
    ? `${styles.nav} ${styles.navOpen}`
    : `${styles.nav}`;

  let ulClassname = navOpen
    ? `${styles.navUl} ${styles.ulOpen}`
    : `${styles.navUl}`;

  return (
    <>
      <nav className={navClassname} ref={node}>
        <button onClick={toggleNav} className={styles.openNavButton}>
          O
        </button>
        <ul className={ulClassname}>
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
    </>
  );
};

export default Nav;
