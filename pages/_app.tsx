import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
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
      <GCScript siteUrl={'https://temcrase.goatcounter.com/count'} />
      <Component {...pageProps} />
    </>
  );
}

export default Temcrase;
