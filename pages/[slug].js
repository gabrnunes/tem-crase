import React from 'react'
import Prismic from '@prismicio/client'

import { Client } from '../prismic-configuration'

export default function Post({ doc }) {
  if(!doc) {
    return <h1>Não encontrado</h1>
  }
  
  return (
    <h1>
        {doc.data.explicacao[0].text}
    </h1>
  );
}

export async function getStaticProps({params}) {
  const client = Client()
  const doc = (await client.getByUID('frases', params.slug))

  return {
    props: {
      doc,
    },
  }
}

export async function getStaticPaths() {
    const client = Client()

    var options = {
      fetch: 'frases.uid',
      pageSize: 100
    };

    const allSentences = (await client.query(
      Prismic.Predicates.at('document.type', 'frases'), 
      options
    ))

    const paths = allSentences.results.map((sentence) => ({
        params: { slug: sentence.uid },
    }))

    return { paths, fallback: true }
}