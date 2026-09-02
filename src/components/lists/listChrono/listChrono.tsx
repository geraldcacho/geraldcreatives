// components/listChrono/listChrono.tsx

import CardJob from '@/components/cards/cardJob/cardJob';
import styles from './listChrono.module.scss';

type Props = {
  list: Array<ListProps>;
  category: string;
};

type ListProps = {
  category: string;
  jobs: Array<JobProps>;
};

type JobProps = {
  title: string;
  description?: string;
  tags: Array<string>;
  image?: string;
  url?: string;
};

export default function ListChrono({ list, category }: Props) {
  if (!list.length) return <p>No projects found.</p>;

  // Every category is rendered so the content is present in the server HTML for
  // crawlers; inactive categories are hidden from view and assistive tech.
  return (
    <>
      {list.map((group) => (
        <ol
          key={group.category}
          className={styles.list}
          hidden={group.category !== category}
          aria-label={group.category}
        >
          {group.jobs.map((job, index) => (
            <li className={styles['list-item']} key={index}>
              <ul className={styles.sublist}>
                <li className={styles['sublist-item']}>
                  <CardJob
                    title={job.title}
                    description={job.description}
                    tags={job.tags}
                    image={job.image}
                    url={job.url}
                  />
                </li>
              </ul>
            </li>
          ))}
        </ol>
      ))}
    </>
  );
}
