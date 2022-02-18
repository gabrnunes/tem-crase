import React from 'react';
import Head from 'next/head';

import Layout from '@components/Layout/Layout';
import Link from 'next/link';

export default function OQueECrase() {
  return (
    <Layout justifyContent="flex-start" title="O que é crase?">
      <>
        <h1>O que é crase?</h1>
        <p>
          O que quase todo mundo chama de crase na verdade é o acento grave.
          Crase é apenas o nome do fenômeno que une o artigo definido +
          preposição em uma única letra, já que são iguais: a + a = à.
        </p>
        <p>
          Só acontece em palavras femininas, pois o o artigo definido masculino
          é {'"'}o{'"'}, então quando se junta com a preposição {'"'}a{'"'}{' '}
          fica: ao.
        </p>
        <p>
          Por isso que um {'"'}truque{'"'} bastante usado é tentar passar para o
          masculino. Se no masculino for {'"'}ao{'"'}, então no feminino fica{' '}
          {'"'}à{'"'}. Se no masculino continuar sendo {'"'}a{'"'}, então no
          feminino também. Exceto em casos facultativos, em que se usa o acento
          grave para diferenciar o uso da preposição em relação ao uso do
          artigo.
        </p>
        <p>
          Ex:
          <ul>
            <li>Entreguei isso a Márcia.</li>
            <li>Entreguei isso à Márcia.</li>
          </ul>
        </p>
        <p>
          <strong>Texto enviado por Tânia d'Arc.</strong>
        </p>
      </>
    </Layout>
  );
}
