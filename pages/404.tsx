import React from 'react';
import Head from 'next/head';

import Layout from '@components/Layout/Layout';

import Button from '@components/Button/Button';

export default function Sobre() {
  return (
    <Layout justifyContent="flex-start">
      <Head>
        <title>Página não encontrada - temcrase.com</title>
      </Head>
      <>
        <h1>Página não encontrada</h1>
        <p>Ops! Parece que essa página não existe.</p>
        <Button href="/">
          <span>⟵</span> voltar para página inicial
        </Button>
      </>
    </Layout>
  );
}
