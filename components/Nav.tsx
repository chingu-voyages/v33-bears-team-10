import React, { useState, useRef } from 'react';
import styles from '../styles/Nav.module.scss';
import Link from 'next/link';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { useAuth } from '../hooks/useAuth';

const Nav = () => {
  const auth = useAuth();

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
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/QuizSelection'>
              <a className={styles.link}>Quiz</a>
            </Link>
          </li>
          <li>
            <Link href='/Data'>
              <a className={styles.link}>Data</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className={styles.link}>About</a>
            </Link>
          </li>
          {auth.user !== null && (
            <li>
              <button className={styles.signOut} onClick={() => auth.signout()}>
                Sign Out
              </button>
            </li>
          )}
          <div className={styles.hamburger}></div>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
