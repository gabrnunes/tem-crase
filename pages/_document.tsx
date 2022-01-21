import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            name="description"
            content="Essa frase tem crase? A gente sabe a resposta."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://temcrase.com/" />

          <meta
            property="og:description"
            content="Essa frase tem crase? A gente sabe a resposta."
          />
          <meta property="og:image" content="https://temcrase.com/card.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://temcrase.com" />

          <meta
            property="twitter:description"
            content="Essa frase tem crase? A gente sabe a resposta."
          />
          <meta
            property="twitter:image"
            content="https://temcrase.com/card.png"
          />
        </Head>
        <body>
          <script defer src="noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
