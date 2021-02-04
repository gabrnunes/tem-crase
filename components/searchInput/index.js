import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'

export default function SearchInput({ text = '' }) {
  const [searchText, setSearchText] = useState(text);
  const router = useRouter()

  function search(e) {
    if(!searchText || searchText === text) {
        return
    }

    if (e.key && e.key !== 'Enter') {
      return
    }

    router.push({
        pathname: `/busca`,
        query: { s: searchText },
    })
  }

  return (
    <>
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={search} type="search" />
      <button onClick={search}>Pesquisar</button>
    </>
  )
}
