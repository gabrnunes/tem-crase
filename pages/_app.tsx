import NProgress from 'nprogress';
import Router from 'next/router';
import Script from 'next/script';
import { GCScript } from 'next-goatcounter';

import '../styles/nprogress.css';
import '../styles/globals.css';

function Temcrase({ Component, pageProps }) {
  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
  });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  return (
    <>
      <Script id="Adsense-id" async
        onError={(e) => { console.error("Script failed to load", e);}}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5481313534861872"
        crossOrigin="anonymous"
      />
      <GCScript siteUrl={'https://temcrase.goatcounter.com/count'} />
      <Component {...pageProps} />
    </>
  );
}

export default Temcrase;
