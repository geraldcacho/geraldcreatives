import 'normalize.css';
import './globals.scss';

import { Poppins } from '@next/font/google';
import Head from 'next/head';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const poppins = Poppins({
  weight: ['300', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

const GA_TRACKING_ID = 'G-PJV7EC72XD'; // Replace with your Google Analytics ID

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!document.body.classList.length) {
      document.body.classList.add('dark');
    }
  }, []); // Add an empty dependency array to run only once on mount

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Handle initial page load
    handleRouteChange(window.location.pathname);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={`${poppins.className} app`}>
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </Head>
      <Header />
      <main role="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;