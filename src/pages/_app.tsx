import axiosClient from '@/api-client/axiosClient';
import { DefaultLayout } from '@/components/layouts';
import { AppPropsWithLayout } from '@/models';
import { createEmotionCache, theme } from '@/utils';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SWRConfig } from 'swr';
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
          <ToastContainer />
          <SWRConfig value={{fetcher: (url) => axiosClient.get(url) , shouldRetryOnError : false}}>
           <Layout>
                <Component {...pageProps} />
           </Layout>
           </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}