import 'normalize.css';
import './globals.scss';

import { Poppins } from '@next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { GTM_ID } from '@/lib/gtm';

const poppins = Poppins({
  weight: ['300', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (!document.body.classList.length) {
      document.body.classList.add('dark');
    }
  }, []); // Run only once on mount

  return (
    <div className={`${poppins.className} app`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {GTM_ID ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      ) : null}

      <Header />
      <main role="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
