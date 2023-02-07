import React from 'react';

import Layout from '@components/Layout/Layout';
import Link from 'next/link';

export default function Sobre() {
  return (
    <Layout justifyContent="flex-start" title="Sobre">
      <>
        <h1>A história do tem crase</h1>
        <p>
          O site surgiu depois de inumeras pesquisas na internet do tipo &quot;volta as aulas tem crase?&quot;. E encontrar respostas gigantes que
          explicavam todas as regras da crase não respondiam apenas &quot;NÃO!&quot;
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
          <strong><a
            href="https://nunesgabriel.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Gabriel Nunes
          </a>{' '}</strong>
          (no Twitter sou o{' '}
          <strong><a
            href="https://twitter.com/nunesgabriel"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            @nunesgabriel
          </a></strong>
          ). Trabalho como desenvolvedor de software, organizo uns eventos e sou
          entusiasta de design.
        </p>
        <p>
          Espero que você curta o projeto e sinta-se à vontade para{' '}
          <Link href="/ajude">
          <strong> <a className="link">ajudar a melhorá-lo</a></strong>
          </Link>
          !
        </p>
        <h3>O site já contou com a ajuda de algumas pessoas</h3>
        <p>
          Muito obrigado! Se você ajudou, mas seu nome não está na lista, pode
          me mandar um e-mail em <strong>gabriel@onionrings.com.br</strong>. Pode mandar um
          e-mail também caso queira vincular algum link no seu nome!
        </p>
        <ul>
          <li>
            Mônica Guerretta: Ela criou o projeto{' '}
            <strong> <a
              href="https://www.instagram.com/qualeocerto/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              &quot;Qual é o certo?&quot;
            </a>{' '}</strong>
            e ajudou em muitas respostas que temos aqui.
          </li>
          <li>
          <strong><a
              href="https://www.linkedin.com/in/dalvacorrea/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Dalva Corrêa
            </a>{' '}</strong>
            que compartilhou uma planilha com vários termos que causam dúvidas
            de crase
          </li>
          <li>
          <strong><a
              href="https://www.linkedin.com/in/taniadarc/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Tânia d&apos;Arc
            </a>{' '}</strong>
            que criou o texto da página &quot;O que é crase?&quot;
          </li>
        </ul>
      </>
    </Layout>
  );
}
