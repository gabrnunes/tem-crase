import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head></Head>
        <body>
          <script defer src="noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
