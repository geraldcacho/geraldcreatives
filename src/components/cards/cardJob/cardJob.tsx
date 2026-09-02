import ListTags from '@/components/lists/listTags/listTags';
import Image from 'next/image';
import styles from './cardJob.module.scss';
import { track } from '@/lib/analytics';

type Props = {
  title: string;
  description?: string;
  tags: Array<string>;
  image?: string;
  url?: string;
}

export default function CardJob(props: Props) {
  const { title, description = '', tags, image, url } = props;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {image && (
        <a
          href={url || '#'}
          target={url ? '_blank' : undefined}
          rel={url ? 'noopener noreferrer' : undefined}
          onClick={
            url
              ? () => track('project_view', { project_name: title, project_url: url })
              : undefined
          }
        >
          <Image
            className={styles.image}
            src={image}
            alt={`${title} — project by Gerald Cacho`}
            width={720}
            height={560}
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ width: '100%', height: 'auto' }}
            loading="lazy"
          />
        </a>
      )}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.infos}>
        <ListTags list={tags} />
      </div>
    </div>
  );
}
