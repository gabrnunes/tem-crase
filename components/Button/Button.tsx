import type { ReactNode } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: (e) => void;
  disabled?: boolean;
};

export default function Button({ children, href, onClick, disabled }: Props) {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={styles.button}>{children}</a>
        </Link>
      ) : (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
          {children}
        </button>
      )}
    </>
  );
}
