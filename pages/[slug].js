import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import search, { getAllSentences } from "../lib/search";
import Button from "../components/Button";

function Post({ answer }) {
  return (
    <Layout justifyContent="flex-start">
      <Head>
        <title>{answer?.frase[0].text} tem crase? - temcrase.com</title>
      </Head>
      <h1>{answer?.frase[0].text} tem crase?</h1>
      <div className="resposta">{answer?.resposta.data.titulo[0].text}</div>
      <p>{answer?.explicacao[0].text}</p>

      <Button href="/">
        <span>⟵</span> tire outras dúvidas sobre crase
      </Button>
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
