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

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!document.body.classList.length) {
      document.body.classList.add('dark');
    }
  }, []); // Add an empty dependency array to run only once on mount

  return (
    <div className={`${poppins.className} app`}>
      <Head>
        {/* No Google Analytics scripts */}
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
