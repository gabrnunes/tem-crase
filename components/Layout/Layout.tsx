import type { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import useDarkMode from 'use-dark-mode';

import styles from './styles.module.css';
import DarkModeToggle from '@components/DarkModeToggle/DarkModeToggle';

type Props = {
  children: ReactNode;
  justifyContent?: 'center' | 'flex-start';
  title: string;
};

export default function Layout({
  children,
  justifyContent = 'center',
  title,
}: Props) {
  const { value } = useDarkMode();

  return (
    <>
      <Head>
        <title>{title} - temcrase.com</title>
        <meta name="title" content={`${title} - temcrase.com`} />
        <meta property="twitter:title" content={`${title} - temcrase.com`} />
        <meta property="og:title" content={`${title} - temcrase.com`} />

        <meta
          name="description"
          content="Essa frase tem crase? A gente sabe a resposta."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://temcrase.com/" />

        <meta
          property="og:description"
          content="Essa frase tem crase? A gente sabe a resposta."
        />
        <meta property="og:image" content="https://temcrase.com/card.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://temcrase.com" />

        <meta
          property="twitter:description"
          content="Essa frase tem crase? A gente sabe a resposta."
        />
        <meta
          property="twitter:image"
          content="https://temcrase.com/card.png"
        />
      </Head>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Link href="/">
            <a className={styles.logo}>
              <span className={styles.symbol}>
                <Image
                  src={value ? `/logo-dark.svg` : `/logo.svg`}
                  width={16}
                  height={16}
                  alt="temcrase.com"
                />
              </span>
              tem<strong>crase</strong>.com
            </a>
          </Link>
        </header>
        <main
          className={styles.main}
          style={{ justifyContent: justifyContent }}
        >
          <section className={styles.content}>{children}</section>
        </main>
        <footer className={styles.footer}>
          <nav>
            <ul className={styles.nav}>
              <li>
                <Link href="/o-que-e-crase">
                  <a>o que é crase?</a>
                </Link>
              </li>
              <li>
                <Link href="/tudo">
                  <a>todas as frases</a>
                </Link>
              </li>
              <li>
                <Link href="/ajude">
                  <a>ajude a melhorar</a>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/gabrnunes/tem-crase"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  código no github
                </a>
              </li>
              <li>
                <Link href="/cafe">
                  <a>me pague um café</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a>sobre</a>
                </Link>
              </li>
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
}
