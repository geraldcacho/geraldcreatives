import ButtonCTA from '@/components/buttons/cta/cta';
import { Icon } from '@iconify/react';
import styles from './listAccordion.module.scss';

type Props = {
  list: Array<ItemProps>
}

type ItemProps = {
  title: string,
  content: string
}

export default function ListAccordion(props: Props) {
  return (
    <ol className={styles.list}>
      {props.list.map((item, index) => (
        <li key={index} className={styles.item}>
          <details>
            <summary className={styles.title}>
              <h2>{item.title}</h2>
              <Icon icon="eva:diagonal-arrow-right-up-outline" />
            </summary>
            <div className={styles.content}>
              <p>{item.content}</p>
              <ButtonCTA title="Let's Connect" href="mailto:gc.geraldcacho@gmail.com" />
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
