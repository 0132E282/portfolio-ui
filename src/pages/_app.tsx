import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache , theme } from '@/utils';
import { DefaultLayout } from '@/components/layouts';
import { AppPropsWithLayout } from '@/models';
import '../../style/prism.css';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({Component, pageProps , emotionCache = clientSideEmotionCache}: AppPropsWithLayout) {
   const Layout = Component.Layout ?? DefaultLayout;
   
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
           <Layout>
               <Component {...pageProps} />
           </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}