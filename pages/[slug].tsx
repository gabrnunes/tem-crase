import React from 'react';

import Layout from '@components/Layout/Layout';
import Button from '@components/Button/Button';
import search, { getAllSentences } from '@lib/search';
import SearchResult from '@components/SearchResult/SearchResult';
import { useRouter } from 'next/router'
import ShareWithFriends from '@components/ShareWithFriends';

function Post({ answer }) {
  const router = useRouter();

  if(router.isFallback){
    return <Layout
      title="Procurando.."
    >
      <h2>Procurando em nosso banco de dados...</h2>
    </Layout>
  }

  return (
    <Layout
      justifyContent="flex-start"
      title={`${answer?.frase[0].text} tem crase?`}
    >
      <SearchResult
        title={`${answer?.frase[0].text} tem crase?`}
        answer={answer?.resposta.data.titulo[0].text}
        size="big"
        explanation={answer?.explicacao[0]?.text}
      />

      <Button href="/">
        <span>⟵</span> tire outras dúvidas sobre crase
      </Button>

      <ShareWithFriends />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const res = await search(params.slug);

  if (!res.success) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      answer: res.searchResult,
    },
  };
}

export async function getStaticPaths() {
  const allSentences = await getAllSentences();

  const paths = allSentences.results.map((sentence) => ({
    params: { slug: sentence.uid },
  }));

  return { paths, fallback: true };
}

export default Post;
