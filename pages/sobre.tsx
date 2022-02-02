import React from 'react';
import Head from 'next/head';

import Layout from '@components/Layout/Layout';
import Link from 'next/link';

export default function Sobre() {
  return (
    <Layout justifyContent="flex-start" title="Sobre">
      <>
        <h1>A história do tem crase</h1>
        <p>
          O site surgiu depois de inumeras pesquisas na internet do tipo {'"'}
          volta as aulas tem crase?{'"'}. E encontrar respostas gigantes que
          explicavam todas as regras da crase não respondiam apenas {'"'}NÃO!
          {'"'}
        </p>
        <p>
          A ideia inicial era construir uma inteligência artificial que aprende
          com o tempo as regras da crase. Depois de vários anos tentando
          entender a regra, desisti. Acabei criando um site onde vou tentar
          cadastrar o maior número possível de frases que possuam crase (ou
          dúvidas) e mostrar as respostas.
        </p>
        <p>
          O projeto foi criado por{' '}
          <a
            href="https://gnun.es"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Gabriel Nunes
          </a>{' '}
          (no Twitter sou o{' '}
          <a
            href="https://twitter.com/nunesgabriel"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            @nunesgabriel
          </a>
          ). Trabalho como desenvolvedor de software, organizo uns eventos e sou
          entusiasta de design.
        </p>
        <p>
          Espero que você curta o projeto e sinta-se a vontade para{' '}
          <Link href="/ajude">
            <a className="link">ajudar a melhorá-lo</a>
          </Link>
          !
        </p>
        <h3>O site já contou com a ajuda de algumas pessoas</h3>
        <p>
          Muito obrigado! Se você ajudou, mas seu nome não está na lista, pode
          me mandar um e-mail em gabriel@onionrings.com.br. Pode mandar um
          e-mail também caso queira vincular algum link no seu nome!
        </p>
        <ul>
          <li>
            Mônica Guerretta: Ela criou o projeto{' '}
            <a
              href="https://www.instagram.com/qualeocerto/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {'"'}Qual é o certo?{'"'}
            </a>{' '}
            e ajudou em muitas respostas que temos aqui.
          </li>
        </ul>
      </>
    </Layout>
  );
}
