import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <script
            data-goatcounter="https://temcrase.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          ></script>
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
