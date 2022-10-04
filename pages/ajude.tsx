import React from 'react';
import Head from 'next/head';

import Layout from '@components/Layout/Layout';
import Link from 'next/link';

export default function Ajude() {
  return (
    <Layout justifyContent="flex-start" title="Ajude a gente!">
      <>
        <h1>Ajude o tem crase a melhorar!</h1>
        <p>
          O <strong>temcrase.com</strong> é um projeto open-source e sem fins
          lucrativos. Ele{' '}
          <Link href="/sobre">
          <strong><a className="link">foi criado por uma pessoa só</a></strong>
          </Link>
          {', '}
          que mantém o site no ar e faz melhorias nele. Você pode ajudar o
          tem crase de várias formas:
        </p>
        <hr />
        <h2>Aumentando nosso banco de dados</h2>
        <p>
          Ao acessar a nossa{' '}
          <strong><a
            className="link"
            href="https://docs.google.com/spreadsheets/d/1GoekW_seyw5lz3k40TkEXK58_YZVOOo1eSpczLiVdDo/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            planilha/banco de dados
          </a>{' '}</strong>
          você pode auxiliar com sugestões de frases e também de respostas.
          Fique livre! A planilha é aberta para comentários.
        </p>
        <h2>Sugerindo melhorias no código</h2>
        <p>
          O tem crase é um{' '}
          <strong><a
            className="link"
            href="https://github.com/gabrnunes/tem-crase"
            target="_blank"
            rel="noopener noreferrer"
          >
            projeto open-source
          </a></strong>
          , que significa que seu código fonte é aberto e qualquer pessoa pode
          fazer melhorias nele. Você também pode{' '}
          <strong><a
            className="link"
            href="https://github.com/gabrnunes/tem-crase/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            abrir um {`\"problema\"`} (issue)
          </a>{' '}</strong>
          no nosso GitHub, para que alguém tente resolver. Fique à vontade,
          também, para fazer qualquer outro comentário através do nosso projeto
          no GitHub.
        </p>
        <h2>Me pagando um café</h2>
        <p>
          Por enquanto, o custo para manter o projeto no ar não é alto. Ele é
          hospedado de forma gratuita na Vercel e pago apenas a renovação anual
          do domínio (R$ 40). Mas, eu (Gabriel) acabo gastando horas de trabalho
          para desenvolver o site, layout e outras melhorias. Então, se você
          sentir-se confortável,{' '}
          <Link href="/cafe">
          <strong><a className="link">pode fazer um Pix</a></strong>
          </Link>{' '}
          de qualquer valor como agradecimento!
        </p>
      </>
    </Layout>
  );
}
