import { Icon } from '@iconify/react';
import styles from './footer.module.scss';
import LinkExternal from '@/components/buttons/external/external';
import Link from 'next/link';
import { track } from '@/lib/analytics';

const RESUME_FILE = '/files/Gerald_Cacho_Resume_202609.pdf';
const EMAIL = 'gc.geraldcacho@gmail.com';

export default function Footer() {
  return (
    <footer role="contentinfo" className={styles.footer}>
      <nav className={styles.links} aria-label="Resume and profiles">
        <LinkExternal
          title="Resume"
          href={RESUME_FILE}
          onClick={() => track('resume_download', { file_name: 'Gerald_Cacho_Resume_202609.pdf' })}
        />
        <LinkExternal
          title="LinkedIn"
          href="https://www.linkedin.com/in/gerald-cacho/"
          onClick={() => track('social_click', { network: 'linkedin' })}
        />
        <LinkExternal
          title="GitHub"
          href="https://github.com/geraldcacho"
          onClick={() => track('social_click', { network: 'github' })}
        />
      </nav>

      <p className={styles.connect}>
        <a
          href={`mailto:${EMAIL}`}
          onClick={() => track('contact_click', { method: 'email', location: 'footer' })}
        >
          <strong>Let&apos;s Connect</strong>
        </a>
      </p>
      <p className={styles.copy}>
        {new Date().getFullYear()} &copy; Gerald Cacho
      </p>

      <Link href="#top" scroll={true} className={styles.backToTop} aria-label="Back to top">
        <Icon icon="eva:arrow-upward-fill" />
      </Link>
    </footer>
  );
}
