import Link from "next/link";

import styles from "./styles.module.css";

export default function Button({ children, href, onClick }) {
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
