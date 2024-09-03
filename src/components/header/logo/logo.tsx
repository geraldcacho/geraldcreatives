import React from 'react';
import styles from './logo.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string; // Accept a className prop
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" aria-label="Gerald Cacho" title="Gerald Cacho" className={`${styles.logo} ${className || ''}`}>
      <div className={styles.flipper}>
        <div className={`${styles.circle} ${styles.front}`}>
          <Image className={styles.symbol} src="/img/gc-logo-dark.png" width="36" height="20" aria-hidden="true" alt="" />
        </div>
        <div className={`${styles.circle} ${styles.back}`}>
          <Image className={styles.avatar} src="/img/gerald-cacho-avatar-sm.png" aria-hidden="true" width="34" height="60" alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Logo;