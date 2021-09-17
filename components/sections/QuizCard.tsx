import React from 'react';
import styles from '../../styles/QuizSelection.module.scss';
interface Props {
  text: string;
}
export const QuizCard: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
