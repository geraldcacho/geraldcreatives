import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import Logo from './logo/logo';
import ToggleTheme from './toggleTheme/toggleTheme';

export default function Header() {
  const router = useRouter();

  return (
    <header id="top" role="banner" className={styles.header}>
      <Logo className={styles.logo} />
      <nav className={styles.menu}>
        <Link href="/about" className={`${styles['menu-item']} ${router.pathname === "/about" ? styles.active : ""}`}>About Me</Link>
        <Link href="/portfolio" className={`${styles['menu-item']} ${router.pathname === "/portfolio" ? styles.active : ""}`}>Portfolio</Link>
        <Link href="/services" className={`${styles['menu-item']} ${router.pathname === "/services" ? styles.active : ""}`}>Services</Link>
      </nav>
      <ToggleTheme className={styles['toggle-theme']} />
    </header>
  );
}
