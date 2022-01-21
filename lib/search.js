import Prismic from '@prismicio/client';
import { slugify } from 'underscore.string';

import { Client } from './prismic-configuration';

export default async function search(text) {
  const slug = slugify(text);

  if (!slug) {
    return {
      success: false,
      error: {
        code: 'empty_search',
        message: 'Busca vazia',
      },
    };
  }

  const client = Client();
  const searchResult = await client.getByUID('frases', slug, {
    fetchLinks: 'respostas.titulo',
  });

  if (!searchResult) {
    const searchRelated = await client.query([
      Prismic.Predicates.at('document.type', 'frases'),
      Prismic.Predicates.fulltext('document', slug),
    ]);

    return {
      success: false,
      related: searchRelated.results,
      error: {
        code: 'not_found',
        message: 'Nenhuma frase encontrada',
      },
    };
  }

  return {
    success: true,
    searchResult: searchResult.data,
  };
}

export async function getAllSentences() {
  const client = Client();

  var options = {
    pageSize: 500,
    orderings: '[my.frases.frase]',
  };

  return await client.query(
    Prismic.Predicates.at('document.type', 'frases'),
    options,
  );
}
