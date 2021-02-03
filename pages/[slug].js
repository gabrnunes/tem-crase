import React from 'react'
import Prismic from '@prismicio/client'

import { Client } from '../prismic-configuration'

export default function Post({ doc, related }) {
  if(!doc) {
    return (
      <>
      <h1>Não encontrado</h1>

      {related && (
          <div>
            <h3>Você quis dizer:</h3>
          {related.map((rel, index) => {
            return <span>
              <a href={rel.uid}>
                  {rel.data.frase[0].text}
              </a>
            </span>
          })}
          </div>
      )}
      </>
    )
  }
  
  return (
    <>
      <h1>
          {doc.data.frase[0].text}
      </h1>
      <div className="resposta">
        {doc.data.resposta.data.titulo[0].text}
      </div>
      <p>
      {doc.data.explicacao[0].text}
      </p>
    </>
  );
}

export async function getStaticProps({params}) {
  const client = Client()
  let related = null
  let doc = (await client.getByUID('frases', params.slug, {'fetchLinks': 'respostas.titulo'}))

  if (!doc) {
    doc = null
    const query = (await client.query([
      Prismic.Predicates.at('document.type', 'frases'),
      Prismic.Predicates.fulltext('document', params.slug)
    ]))
    
    related = query.results
  }
  
  return {
    props: {
      doc,
      related
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