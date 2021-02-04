import NProgress from 'nprogress';
import Router from 'next/router';

import "nprogress/nprogress.css";
import '../styles/globals.css'

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
    NProgress.done()
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  });
  
  return <Component {...pageProps} />
}

export default Temcrase
