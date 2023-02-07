import clsx from 'clsx';

import Answear from '@components/Answer/Answer';
import Ad from '@components/Ad/Ad';
import NeedsExplanation from './NeedsExplanation';
import { Answer } from '@lib/types';

import styles from './styles.module.css';

type Props = {
  title: string;
  answer: Answer;
  size?: 'normal' | 'big';
  explanation?: string;
};

export default function SearchResult({
  title,
  answer,
  size = 'normal',
  explanation,
}: Props) {
  return (
    <section
      className={clsx(styles.wrapper, {
        [styles['wrapper-big']]: size === 'big',
      })}
    >
      <header
        className={clsx(styles.header, {
          [styles['header-big']]: size === 'big',
        })}
      >
        <h1
          className={clsx(styles.title, {
            [styles['title-big']]: size === 'big',
          })}
        >
          {title}
        </h1>
        <Answear answer={answer} size={size} />
      </header>
      {explanation ? (
        <p className={styles.explanation}>{explanation}</p>
      ) : (
        <NeedsExplanation />
      )}
      <Ad />
    </section>
  );
}
