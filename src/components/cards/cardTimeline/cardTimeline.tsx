import styles from './cardTimeline.module.scss';

type Props = {
  year: string,
  title: string,
  company: string,
  description: string
}

export default function CardTimeline(props: Props) {
  return(
    <div className={styles.card}>
      <span className={styles.year}>{props.year}</span>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title} - <span className={styles.company}>{props.company}</span></h3>       
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  )
}