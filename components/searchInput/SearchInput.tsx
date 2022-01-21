import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@components/Button/Button';

import styles from './styles.module.css';

type Props = {
  text?: string | string[];
};

export default function SearchInput({ text = '' }: Props) {
  const [searchText, setSearchText] = useState(text);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }

    setIsLoading(false);
  }, [searchText]);

  function search(e) {
    if (!searchText || searchText === text) {
      return;
    }

    if (e.key && e.key !== 'Enter') {
      return;
    }

    setIsLoading(true);

    router.push({
      pathname: `/busca`,
      query: { s: searchText },
    });
  }

  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a>
          <Image src="/logo.svg" width={48} height={48} alt="temcrase.com" />
        </a>
      </Link>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={search}
        type="search"
        className={styles.input}
        placeholder="volta as aulas"
        ref={inputElement}
      />
      <Button onClick={(e) => search(e)} isLoading={isLoading}>
        tem crase?
      </Button>
    </div>
  );
}
