import clsx from 'clsx';

import { Answer as AnswerType } from '@lib/types';

import styles from './styles.module.css';

const answerPtBr = {
  yes: 'sim',
  no: 'não',
  maybe: 'talvez',
  'dont-know': 'não sei',
  'follow-your-heart': 'siga seu coração',
};

type Props = {
  answer: AnswerType;
  size?: 'normal' | 'big';
};

export default function Answer({ answer, size = 'normal' }: Props) {
  return (
    <div className={clsx(size === 'big' && styles.wrapper)}>
      <span
        className={clsx(
          styles.answer,
          { [styles.big]: size === 'big' },
          styles[answer],
        )}
      >
        {answerPtBr[answer]}
      </span>
    </div>
  );
}
