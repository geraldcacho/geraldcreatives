'use client'

import { Icon } from "@iconify/react";
import styles from './footer.module.scss';
import LinkExternal from '@/components/buttons/external/external';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer role="contentinfo" className={styles.footer}>
      <nav className={styles.links}>
        <LinkExternal title="Resume" href="/files/Gerald_Cacho_resume2024.pdf" />
        <LinkExternal title="LinkedIn" href="https://www.linkedin.com/in/gerald-cacho/" />
      </nav>

      <p className={styles.connect}>
        <a href="mailto:gc.geraldcacho@gmail.com" className={styles.cta}>
          <strong>Let&apos;s Connect</strong>
        </a>
      </p>
      <p className={styles.copy}>2024 &copy; Gerald Cacho</p>
      <p className={styles.coffee}>
        <a href="https://wise.com/pay/me/geraldc526" target="_blank" rel="noopener noreferrer">
          <small>
            <Icon icon="eva:heart-fill" />
            <strong> Buy me a coffee</strong>
          </small>
        </a>
      </p>
      <Link href="#top" scroll={true} className={styles.backToTop}>
        <Icon icon="eva:arrow-upward-fill" />
      </Link>
    </footer>
  )
}