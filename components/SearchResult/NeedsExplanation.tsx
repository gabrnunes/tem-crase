import Link from 'next/link';

import styles from './styles.module.css';

export default function NeedsExplanation() {
  return (
    <p className={styles['needs-explanation']}>
      Esta frase ainda não tem uma explicação. Ajude o Temcrase a melhorar
      sugerindo uma. Acesse a página{' '}
      <Link href="/ajude">
        <a className="link">ajude a melhorar</a>
      </Link>{' '}
      para saber mais.
    </p>
  );
}
