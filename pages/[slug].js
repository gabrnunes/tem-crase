import React from 'react'

import search, { getAllSentences } from '../lib/search'

function Post({ answer }) {
  return (
    <>
      <h1>
          {answer?.frase[0].text}
      </h1>
      <div className="resposta">
        {answer?.resposta.data.titulo[0].text}
      </div>
      <p>
      {answer?.explicacao[0].text}
      </p>
    </>
  );
}

export async function getStaticProps({params}) {
  const res = await search(params.slug);

  if (!res.success) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      answer: res.searchResult
    },
  }
}

export async function getStaticPaths() {
    const allSentences = await getAllSentences();

    const paths = allSentences.results.map((sentence) => ({
        params: { slug: sentence.uid },
    }))

    return { paths, fallback: true }
}

export default Post