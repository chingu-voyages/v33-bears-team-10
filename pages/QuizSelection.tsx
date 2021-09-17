import React from 'react';
import { QuizCard } from '../components/sections/QuizCard';
import styles from '../styles/QuizSelection.module.scss';

const QuizSelection: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardFirst}>
        <QuizCard text='Play a game based on your playlists!' />
        <button className={styles.button + ' ' + styles.ripple}>Play</button>
      </div>
      <div className={styles.cardSecond}>
        <QuizCard text='Play a game based on your top tracks!' />
        <button className={styles.button + ' ' + styles.ripple}>Play</button>
      </div>
    </div>
  );
};

export default QuizSelection;
// const example = () => {
//   return (
//     <div className={styles.PageContainer}>
//       <ul>
//         <li>
//           <Component />
//         </li>
//       </ul>

//       <Component />
//       <Component />

//       <div oneCard>
//         <div catagory1>
//           <div role='button'>topTracks</div>
//           <div>Playlists</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default example;
