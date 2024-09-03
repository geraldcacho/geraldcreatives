import ListTags from '@/components/lists/listTags/listTags';
import Image from 'next/image';
import styles from './cardJob.module.scss';

type Props = {
  title: string,
  description: string,
  tags: Array<string>,
  image?: string,
  url?: string // Add url here
}

export default function CardJob(props: Props) {
  const { title, description, tags, image, url } = props;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>      
      {image && (
        url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
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
        ) : (
          <Image 
            className={styles.image} 
            src={image} 
            alt={`Conceito do projeto ${title}`} 
            layout="responsive" 
            width={720} 
            height={560} 
            loading="lazy" 
          />
        )
      )}
      <p className={styles.description}>{description}</p>
      <div className={styles.infos}>
        <ListTags list={tags} />
      </div>
    </div>
  );
}
