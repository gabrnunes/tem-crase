import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@components/Button/Button';

import styles from './styles.module.css';

type Props = {
  text?: string | string[];
};

export default function SearchInput({ text = '' }: Props) {
  const { value } = useDarkMode();
  const [searchText, setSearchText] = useState(text);
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsDisabled(false);
  }, [searchText]);

  function search(e) {
    if (!searchText || searchText === text) {
      return;
    }

    if (e.key && e.key !== 'Enter') {
      return;
    }

    setIsDisabled(true);

    router.push({
      pathname: `/busca`,
      query: { s: searchText },
    });
  }

  return (
    <div className={styles.wrapper}>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={search}
        type="search"
        className={styles.input}
        placeholder="volta as aulas"
      />
      <Button onClick={(e) => search(e)} disabled={isDisabled}>
        tem crase?
      </Button>
    </div>
  );
}
