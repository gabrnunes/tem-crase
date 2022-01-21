import clsx from 'clsx';
import Link from 'next/link';

import styles from './styles.module.css';

type Props = {
  sentences: [any];
};

export default function AllSentences({ sentences }: Props) {
  return (
    <>
      <h1 className={styles.title}>Frases que podem conter crase</h1>
      <p className={styles.description}>
        Este é o banco de dados atual que a nossa ferramenta consegue te
        responder.
      </p>
      <div className={styles.grid}>
        {sentences?.map((sentence, index) => (
          <Link key={index} href={`/${sentence.uid}`}>
            <a className={styles.link}>{sentence.data.frase[0].text}</a>
          </Link>
        ))}
      </div>
    </>
  );
}
