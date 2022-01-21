import type { ReactNode } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: (e) => void;
};

export default function Button({ children, href, onClick }: Props) {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={styles.button}>{children}</a>
        </Link>
      ) : (
        <button className={styles.button} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}
