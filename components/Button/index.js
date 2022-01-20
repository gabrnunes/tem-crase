import styles from "./styles.module.css";

export default function Button({ children, href, onClick }) {
  return (
    <>
      {href ? (
        <a className={styles.button} href={href}>
          {children}
        </a>
      ) : (
        <button className={styles.button} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}
