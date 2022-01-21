import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '@components/Layout/Layout';
import SearchInput from '@components/Search/Search';
import SearchResult from '@components/SearchResult/SearchResult';
import { getAllSentences } from '@lib/search';
import AllSentences from '@components/AllSentences/AllSentences';

export default function Tudo({ allSentences }) {
  return (
    <Layout justifyContent="flex-start">
      <Head>
        <title>Frases que podem conter crase - temcrase.com</title>
      </Head>

      <AllSentences sentences={allSentences} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const allSentences = await getAllSentences();

  return {
    props: {
      allSentences: allSentences.results,
    },
  };
}
