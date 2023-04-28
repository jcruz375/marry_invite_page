import { Layout } from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DrawerProvider } from '../contexts/DrawerContext';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DrawerProvider>
  );
}
