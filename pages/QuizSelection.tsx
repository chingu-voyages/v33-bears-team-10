import React from 'react';
import { QuizCard } from '../components/sections/QuizCard';
import styles from '../styles/QuizSelection.module.scss';

const QuizSelection: React.FC = () => {
  return (
    <div className={styles.PageContainer}>
      <div className={styles.cardFirst}>
        <QuizCard text='Whats good in the hood dude' />
      </div>
      <div className={styles.cardSecond}>
        <QuizCard text='Whats good in the hood dude' />
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
