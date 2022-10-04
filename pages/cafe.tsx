import React from 'react';
import Head from 'next/head';

import Layout from '@components/Layout/Layout';
import Link from 'next/link';

export default function Cafe() {
  return (
    <Layout justifyContent="flex-start" title="Me pague um café">
      <>
        <h1>Me pague um café</h1>
        <p>
          O <strong>temcrase.com</strong> é um projeto open-source{' '}
          <Link href="/sobre">
          <strong> <a className="link">criado por uma pessoa só</a></strong>
          </Link>
          {', '}
          que mantém o site no ar e faz melhorias no mesmo. Ele sempre será
          gratuito e não contém cookies, tracks e anúncios. Respeitamos sua
          privacidade!
        </p>
        <hr />
        <h2>Se você quer me agradecer de alguma forma, faz um Pix</h2>
        <p>
          Sinta-se a vontade para{' '}
          <strong><a
            className="link"
            href="https://nubank.com.br/pagar/5kho2/YC0361rW2e"
            target="_blank"
            rel="noreferrer noopener"
          >
            fazer um Pix de qualquer valor
          </a>
          {'! '}</strong>
          Manter o projeto no ar, dá trabalho e isso vai me incentivar a
          mantê-lo sempre funcionando.
        </p>
        <p>
          No link acima, você tem acesso ao QR-Code da minha chave, ou, se
          estiver com preguiça pode fazer direto para a chave, ela é meu e-mail:{' '}
          <strong>gabriel@onionrings.com.br</strong>
        </p>
      </>
    </Layout>
  );
}
