import '../styles/globals.css';
import '@fontsource/changa';

import Layout from '../components/Layout';
import Menu from '../components/Menu';

import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Footer />
    </>
  );
}

export default MyApp;
