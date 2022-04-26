import '../styles/theme.scss';

import Head from 'next/head';
import { Sidenav } from '../components';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <title>Dashboard Demo</title>
      </Head>
      <Sidenav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
