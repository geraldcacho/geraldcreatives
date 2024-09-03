import ListTags from '@/components/lists/listTags/listTags';
import Image from 'next/image';
import styles from './cardJob.module.scss';

type Props = {
  title: string;
  description?: string; // Make description optional
  tags: Array<string>;
  image?: string;
  url?: string; // Make url optional
}

export default function CardJob(props: Props) {
  const { title, description = '', tags, image, url } = props;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {image && (
        <a href={url || '#'} target={url ? "_blank" : undefined} rel={url ? "noopener noreferrer" : undefined}>
          <Image 
            className={styles.image} 
            src={image} 
            alt={`Conceito do projeto ${title}`} 
            layout="responsive" 
            width={720} 
            height={560} 
            loading="lazy" 
          />
        </a>
      )}
      {description && <p className={styles.description}>{description}</p>} {/* Conditionally render description */}
      <div className={styles.infos}>
        <ListTags list={tags} />
      </div>
    </div>
  );
}
