import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { slugify } from 'underscore.string';

import Layout from '@components/Layout/Layout';
import SearchInput from '@components/Search/Search';
import SearchResult from '@components/SearchResult/SearchResult';
import search from '@lib/search';

export default function Busca({ answer, related }) {
  const router = useRouter();
  const { s } = router.query;

  useEffect(() => {
    if (!answer) {
      const slug = slugify(s);

      (window as any).goatcounter.count({
        path: `dont-know/${slug}`,
        title: s,
        event: true,
      });
    }
  }, [answer, s]);

  if (!answer) {
    return (
      <Layout justifyContent="flex-start" title="Nenhum resultado encontrado">
        <SearchInput text={s} />

        <SearchResult
          title={`${s}`}
          answer="dont-know"
          explanation="Eu ainda não tenho a resposta! Mas, fica na tranquilidade, nossos robôs já foram avisados da sua dúvida e vão analisá-la para colocar na lista para a próxima vez. Ou, se você mesmo descobrir a resposta, pode acessar o link 'ajude a melhorar' no rodapé."
        />

        {related && related[0] && (
          <>
            <h3>Ou, talvez, você quis dizer:</h3>

            <ul>
              {related.map((rel, index) => {
                return (
                  <li key={`related-${index}`}>
                    <a className="link" href={`/busca?s=${rel.uid}`}>
                      {rel.data.frase[0].text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </Layout>
    );
  }

  return (
    <Layout
      justifyContent="flex-start"
      title={`${answer?.frase[0].text} tem crase?`}
    >
      <SearchInput text={s} />
      <SearchResult
        title={answer.frase[0].text}
        answer={answer.resposta.data.titulo[0].text}
        explanation={answer.explicacao[0].text}
      />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await search(query.s);

  if (!res.success) {
    if (res.error.code === 'not_found') {
      return {
        props: {
          related: res.related,
        },
      };
    }

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
