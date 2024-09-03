// components/listChrono/listChrono.tsx

import CardJob from '@/components/cards/cardJob/cardJob';
import styles from './listChrono.module.scss';

type Props = {
  list: Array<ListProps>,
  category: string
};

type ListProps = {
  category: string,
  jobs: Array<JobProps>
};

type JobProps = {
  title: string,
  description: string,
  tags: Array<string>,
  image?: string,
  url?: string
};

export default function ListChrono({ list, category }: Props) {
  // Find the portfolio data for the selected category
  const filteredList = list.find(item => item.category === category);

  if (!filteredList) return <p>No projects found in this category.</p>;

  return (
    <ol className={styles.list}>
      {filteredList.jobs.map((job, index) => (
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
  );
}
