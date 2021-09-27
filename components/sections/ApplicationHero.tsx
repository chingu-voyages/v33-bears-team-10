import React from 'react';
import styles from '../../styles/ApplicationHero.module.scss';

import { useAuth } from '../../hooks/useAuth';

const ApplicationHero = () => {
  const auth = useAuth();

  return (
    <div className={styles.applicationCardContainer}>
      <div className={styles.callToAction__container}>
        <h1 className={styles.callToAction}>
          Play a game about {auth.user ? auth.user.displayName : '__you__'}
        </h1>

        {auth.user === null && (
          <div className={styles.authLink__Container}>{auth.SigninLink}</div>
        )}
      </div>
    </div>
  );
};

export default ApplicationHero;
