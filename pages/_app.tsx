import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ProvideAuth } from '../hooks/useAuth';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideAuth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvideAuth>
  );
}
export default MyApp;
