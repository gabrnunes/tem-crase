import { useState, useEffect, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { slugify } from 'underscore.string';

import Button from '@components/Button/Button';

import styles from './styles.module.css';

type Props = {
  text?: string | string[];
};

export default function SearchInput({ text = '' }: Props) {
  const [searchText, setSearchText] = useState(text);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    setIsDisabled(false);
  }, [searchText]);

  function handleSarchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
    setError('');
  }

  function search(e: KeyboardEvent<HTMLInputElement>) {
    if (!searchText || searchText === text) {
      return;
    }

    if (e.key && e.key !== 'Enter') {
      return;
    }

    const slug = slugify(searchText);
    const regex = new RegExp(/\ba\b|\bas\b/g);
    
    if(!regex.test(slug)) {
      setError('A busca deve conter a palavra "a" ou "as"');
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
      <div className={styles.searchInput}>
        <input
          value={searchText}
          onChange={(e) => handleSarchChange(e)}
          onKeyDown={(e) => search(e)}
          type="search"
          className={cn([styles.input, { [styles.error]: error !== '' }])}
          placeholder="volta as aulas"
        />
        <Button onClick={(e) => search(e)} disabled={isDisabled}>
          tem crase?
        </Button>
      </div>
      {error !== '' && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}
