import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Head from 'next/head';
import Header from '@/components/header/header';
import Image from 'next/image';
import CardPage from '@/components/cards/cardPage/cardPage';

export default function Index() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
      setTheme(newTheme);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Gerald Cacho | Web Developer and Designer</title>
        <meta name="description" content="Web development and design portfolio: WordPress, PHP, Elementor, SEO, custom themes, UI/UX design, eCommerce solutions, digital marketing." />
        <meta property="og:url" content="https://geraldcacho.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gerald Cacho | Web Developer and Designer" />
        <meta property="og:description" content="Web development and design portfolio: WordPress, PHP, Elementor, SEO, custom themes, UI/UX design, eCommerce solutions, digital marketing." />
        <meta property="og:image" content="https://geraldcacho.com/img/gerald-cacho-digital-services.jpg" loading="lazy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://geraldcacho.com/" />
        <meta name="twitter:title" content="Gerald Cacho | Web Developer and Designer" />
        <meta name="twitter:description" content="Web development and design portfolio: WordPress, PHP, Elementor, SEO, custom themes, UI/UX design, eCommerce solutions, digital marketing." />
        <meta name="twitter:image" content="https://geraldcacho.com/img/gerald-cacho-digital-services.jpg" loading="lazy" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="yltPuWkp9Ug6CIU-wJSFvqGNy8KOLznhDvOyh1CVMj8" />
      
      
        <link rel="canonical" href="https://geraldcacho.com/" />
      </Head>

      <div className="wrapper">

        <article className={styles.presentation}>
          <Image
            priority
            src={theme === 'dark' ? '/img/gc-logo-white.png' : '/img/gc-logo-dark.png'}
            width={280}
            height={480}
            alt="Gerald Cacho Logo"
          />

          <h1><span>Hey there, I am</span><strong>Gerald Cacho</strong></h1>
          <h2>Web Developer and Designer</h2>
        </article>

        <nav className={styles.menu}>
          <CardPage href="/about/" title="About Me" icon="person-add-fill" />
          <CardPage href="/portfolio/" title="Portfolio" icon="folder-add-outline" />
          <CardPage href="/services/" title="Services" icon="brush-outline" />
        </nav>
      </div>
    </>
  );
}
