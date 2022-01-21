import React from 'react';
import Head from 'next/head';

import Layout from '@components/Layout/Layout';
import { getAllSentences } from '@lib/search';
import AllSentences from '@components/AllSentences/AllSentences';

export default function Tudo({ allSentences }) {
  return (
    <Layout justifyContent="flex-start" title="Frases que podem conter crase">
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
