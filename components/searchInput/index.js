import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";

import styles from "./styles.module.css";

export default function SearchInput({ text = "" }) {
  const [searchText, setSearchText] = useState(text);
  const router = useRouter();

  function search(e) {
    if (!searchText || searchText === text) {
      return;
    }

    if (e.key && e.key !== "Enter") {
      return;
    }

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
        autoFocus
      />
      <Button onClick={search}>tem crase?</Button>
    </div>
  );
}
