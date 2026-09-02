import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Seo from '@/components/seo/seo';
import CardPage from '@/components/cards/cardPage/cardPage';
import { personSchema, websiteSchema } from '@/data/seo';

export default function Index() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const readTheme = () =>
      document.body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(readTheme());

    const observer = new MutationObserver(() => setTheme(readTheme()));
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Seo
        title="Gerald Cacho | Senior Web Developer & UI/UX Designer"
        description="Gerald Cacho is a senior web developer and designer with 10+ years building WordPress and WooCommerce sites, UI/UX design, technical SEO and CRM automation for clients in the US, UK and Australia."
        path="/"
        image="/img/gerald-cacho-digital-services.jpg"
        jsonLd={[personSchema, websiteSchema]}
      />

      <div className="wrapper">
        <article className={styles.presentation}>
          <Image
            priority
            src={theme === 'dark' ? '/img/gc-logo-white.png' : '/img/gc-logo-dark.png'}
            width={280}
            height={480}
            alt="Gerald Cacho logo"
          />

          <h1>
            <span>Hey there, I am</span>
            <strong>Gerald Cacho</strong>
          </h1>
          <h2>Senior Web Developer &amp; Designer</h2>
        </article>

        <nav className={styles.menu} aria-label="Primary sections">
          <CardPage href="/about" title="About Me" icon="person-add-fill" />
          <CardPage href="/portfolio" title="Portfolio" icon="folder-add-outline" />
          <CardPage href="/services" title="Services" icon="brush-outline" />
        </nav>
      </div>
    </>
  );
}
